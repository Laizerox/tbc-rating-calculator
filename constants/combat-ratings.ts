export enum CombatRating {
  WEAPON_SKILL = 1,
  DEFENSE_SKILL = 2,
  DODGE = 3,
  PARRY = 4,
  BLOCK = 5,
  HIT_MELEE = 6,
  HIT_RANGED = 7,
  HIT_SPELL = 8,
  CRIT_MELEE = 9,
  CRIT_RANGED = 10,
  CRIT_SPELL = 11,
  HIT_TAKEN_MELEE = 12,
  HIT_TAKEN_RANGED = 13,
  HIT_TAKEN_SPELL = 14,
  CRIT_TAKEN_MELEE = 15,
  CRIT_TAKEN_RANGED = 16,
  CRIT_TAKEN_SPELL = 17,
  HASTE_MELEE = 18,
  HASTE_RANGED = 19,
  HASTE_SPELL = 20,
  WEAPON_SKILL_MAINHAND = 21,
  WEAPON_SKILL_OFFHAND = 22,
  WEAPON_SKILL_RANGED = 23,
  EXPERTISE = 24,
}

export interface CombatRatingOption {
  header?: string;
  text?: string;
  value?: CombatRating;
}

const CombatRatingOptions: CombatRatingOption[] = [
  {
    header: 'Defenses',
  },
  {
    text: 'Block Rating',
    value: CombatRating.BLOCK,
  },
  {
    text: 'Defense Rating',
    value: CombatRating.DEFENSE_SKILL,
  },
  {
    text: 'Dodge Rating',
    value: CombatRating.DODGE,
  },
  {
    text: 'Parry Rating',
    value: CombatRating.PARRY,
  },
  {
    text: 'Resilience',
    value: CombatRating.CRIT_TAKEN_MELEE,
  },
  {
    header: 'Melee',
  },
  {
    text: 'Crit Rating',
    value: CombatRating.CRIT_MELEE,
  },
  {
    text: 'Expertise',
    value: CombatRating.EXPERTISE,
  },
  {
    text: 'Haste Rating',
    value: CombatRating.HASTE_MELEE,
  },
  {
    text: 'Hit Rating',
    value: CombatRating.HIT_MELEE,
  },
  {
    header: 'Ranged',
  },
  {
    text: 'Ranged Crit Rating',
    value: CombatRating.CRIT_RANGED,
  },
  {
    text: 'Ranged Haste Rating',
    value: CombatRating.HASTE_RANGED,
  },
  {
    text: 'Ranged Hit Rating',
    value: CombatRating.HIT_RANGED,
  },
  {
    header: 'Spell',
  },
  {
    text: 'Spell Crit Rating',
    value: CombatRating.CRIT_SPELL,
  },
  {
    text: 'Spell Hit Rating',
    value: CombatRating.HIT_SPELL,
  },
  {
    text: 'Spell Haste Rating',
    value: CombatRating.HASTE_SPELL,
  },
  {
    header: 'Misc',
  },
  {
    text: 'Weapon skill',
    value: CombatRating.WEAPON_SKILL,
  },
];

export default CombatRatingOptions;
