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
              <v-col>
                <v-switch v-model="form.isTroll" flat label="Troll" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="form.spirit" label="Spirit" type="number" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Increases Health Regeneration by {{ getHealthPerSecond() }} Per Second while not in combat</p>
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

import classes, { Classes, ClassOption } from '~/constants/classes';
import { GT_MAX_LEVEL } from '~/constants/player';
import gtOCTHealthRegen from '~/data/gt-oct-regen-hp';
import gtRegenHPPerSpt from '~/data/gt-regen-hp-per-spt';

interface HealthRegenCalculatorForm {
  class: Classes;
  level: number;
  spirit: number;
  isTroll: boolean;
}

interface CombatRatingCalculatorData {
  combatRatings: ClassOption[];
  form: HealthRegenCalculatorForm;
}

export default Vue.extend({
  data(): CombatRatingCalculatorData {
    return {
      form: {
        class: Classes.WARRIOR,
        level: 70,
        spirit: 0,
        isTroll: false,
      },
      classes,
    };
  },
  methods: {
    getHealthPerSecond(seconds = 1): number {
      const [baseRegenRatio, extraRegenRatio] = this.getHealthRegenPerSpiritRatio();
      const [baseSpiritValue, extraSpiritValue] = this.getSpiritValues();
      const value = baseSpiritValue * baseRegenRatio + extraSpiritValue * extraRegenRatio;

      return Math.floor(value * seconds);
    },
    getSpiritValues(): [number, number] {
      const baseSpirit = this.form.spirit <= 50 ? this.form.spirit : 50;
      const extraSpirit = this.form.spirit - baseSpirit;

      return [baseSpirit, extraSpirit];
    },
    getHealthRegenPerSpiritRatio(): [number, number] {
      const entry = (this.form.class - 1) * GT_MAX_LEVEL + (this.form.level - 1);
      const baseRegenRatio = gtOCTHealthRegen[entry] || 0;
      const extraRegenRatio = gtRegenHPPerSpt[entry] || 0;

      return [baseRegenRatio, extraRegenRatio];
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
