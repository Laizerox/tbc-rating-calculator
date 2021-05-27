<template>
  <v-row>
    <v-col>
      <v-flex xs12 mt-2 pa-1>
        <v-form>
          <v-layout column wrap>
            <v-text-field v-model="form.level" label="Level" type="number" @input="validateLevel" />
            <v-autocomplete
              v-model="form.combatRating"
              :items="combatRatings"
              auto-select-first
              clearable
              label="Combat rating"
            />
            <v-row>
              <v-col><v-text-field v-model="form.ratingValue" label="Rating value" type="number" /></v-col>
              <v-col>
                <v-text-field
                  :value="getConvertedRating()"
                  label="Converted rating"
                  readonly
                  :suffix="getSuffix()"
                  type="number"
                />
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

import combatRatings, { CombatRating, CombatRatingOption } from '~/constants/combat-ratings';
import gtCombatRatings from '~/data/gt-combat-ratings';
import { GT_MAX_LEVEL } from '~/constants/player';

interface CombatRatingCalculatorForm {
  combatRating: CombatRating;
  level: number;
  ratingValue: number;
}

interface CombatRatingCalculatorData {
  combatRatings: CombatRatingOption[];
  form: CombatRatingCalculatorForm;
  skillRatings: CombatRating[];
}

export default Vue.extend({
  data(): CombatRatingCalculatorData {
    return {
      combatRatings,
      form: {
        combatRating: CombatRating.WEAPON_SKILL,
        level: 70,
        ratingValue: 0,
      },
      skillRatings: [CombatRating.DEFENSE_SKILL, CombatRating.WEAPON_SKILL],
    };
  },
  methods: {
    getConvertedRating(): number {
      const value = this.form.ratingValue * this.getRatingMultiplier();

      if (this.skillRatings.includes(this.form.combatRating)) {
        return Math.floor(value);
      }

      return Math.floor(value * 100) / 100;
    },
    getRatingMultiplier(): number {
      const entry = (this.form.combatRating - 1) * GT_MAX_LEVEL + (this.form.level - 1);
      const ratio = gtCombatRatings[entry];

      return 1.0 / ratio;
    },
    getSuffix(): string {
      if (this.skillRatings.includes(this.form.combatRating)) {
        return this.form.combatRating !== CombatRating.WEAPON_SKILL ? 'Defense' : 'Weapon';
      }

      return '%';
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
