export enum Classes {
  WARRIOR = 1,
  PALADIN = 2,
  HUNTER = 3,
  ROGUE = 4,
  PRIEST = 5,
  SHAMAN = 7,
  MAGE = 8,
  WARLOCK = 9,
  DRUID = 11,
}

export enum UnitPower {
  MANA,
  RAGE,
  FOCUS,
  ENERGY,
}

export interface ClassOption {
  text?: string;
  unitPower?: UnitPower;
  value?: Classes;
}

const ClassOptions: ClassOption[] = [
  {
    text: 'Warrior',
    unitPower: UnitPower.RAGE,
    value: Classes.WARRIOR,
  },
  {
    text: 'Paladin',
    unitPower: UnitPower.MANA,
    value: Classes.PALADIN,
  },
  {
    text: 'Hunter',
    unitPower: UnitPower.MANA,
    value: Classes.HUNTER,
  },
  {
    text: 'Rogue',
    unitPower: UnitPower.ENERGY,
    value: Classes.ROGUE,
  },
  {
    text: 'Priest',
    unitPower: UnitPower.MANA,
    value: Classes.PRIEST,
  },
  {
    text: 'Shaman',
    unitPower: UnitPower.MANA,

    value: Classes.SHAMAN,
  },
  {
    text: 'Mage',
    unitPower: UnitPower.MANA,
    value: Classes.MAGE,
  },
  {
    text: 'Warlock',
    unitPower: UnitPower.MANA,

    value: Classes.WARLOCK,
  },
  {
    text: 'Druid',
    unitPower: UnitPower.MANA,
    value: Classes.DRUID,
  },
];

export default ClassOptions;
