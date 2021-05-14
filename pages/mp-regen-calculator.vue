<template>
  <v-row>
    <v-col>
      <v-flex xs12 mt-2 pa-1>
        <v-form>
          <v-layout column wrap>
            <v-row>
              <v-col>
                <v-text-field v-model="form.level" label="Level" type="number" @input="validateLevel" />
              </v-col>
              <v-col>
                <v-autocomplete v-model="form.class" :items="classes" auto-select-first label="Class" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="form.intellect" label="Intellect" type="number" />
              </v-col>
              <v-col>
                <v-text-field v-model="form.spirit" label="Spirit" type="number" />
              </v-col>
            </v-row>
            <v-row>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Additional stats</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="form.mp5" label="MP5" type="number" />
                      </v-col>
                      <v-col>
                        <v-text-field
                          v-model="form.regenWhileCasting"
                          label="Regeneration While casting"
                          suffix="%"
                          type="number"
                        />
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
            <v-row>
              <v-col>
                <p>{{ getManaPerSecond(5) }} mana regenerated every 5 seconds while not casting</p>
                <p>{{ getManaPerSecond(5, true) }} mana regenerated every 5 seconds while casting</p>
              </v-col>
            </v-row>
          </v-layout>
        </v-form>
      </v-flex>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

import classes, { Classes, ClassOption, UnitPower } from '~/constants/classes';
import gtRegenMPPerSpt from '~/data/gt-regen-mp-per-spt';
import { GT_MAX_LEVEL } from '~/constants/player';

interface ManaRegenCalculatorForm {
  class: Classes;
  intellect: number;
  level: number;
  mp5: number;
  regenWhileCasting: number;
  spirit: number;
}

interface ManaRegenCalculatorData {
  classes: ClassOption[];
  form: ManaRegenCalculatorForm;
}

export default Vue.extend({
  data(): ManaRegenCalculatorData {
    return {
      form: {
        class: Classes.PALADIN,
        intellect: 0,
        level: 70,
        mp5: 0,
        regenWhileCasting: 0,
        spirit: 0,
      },
      classes: classes.filter((c) => c.unitPower === UnitPower.MANA),
    };
  },
  methods: {
    getManaPerSecond(seconds = 1, casting = false): number {
      const value = Math.sqrt(this.form.intellect) * this.form.spirit * this.getManaRegenPerSpiritRatio();
      const mps = this.form.mp5 / seconds;
      const regenWhileCasting = this.form.regenWhileCasting > 0 ? this.form.regenWhileCasting / 100 : 0;

      if (casting) {
        return Math.floor((value * regenWhileCasting + mps) * seconds);
      }

      return Math.floor((value + mps) * seconds);
    },
    getManaRegenPerSpiritRatio(): number {
      const entry = (this.form.class - 1) * GT_MAX_LEVEL + (this.form.level - 1);

      return gtRegenMPPerSpt[entry] || 0;
    },
    validateLevel(value: number) {
      if (!value) {
        this.form.level = 1;
      }

      if (value > GT_MAX_LEVEL) {
        this.form.level = GT_MAX_LEVEL;
      }
    },
  },
});
</script>
