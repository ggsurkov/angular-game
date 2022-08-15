import {IBaseEntity} from './base-entity';
import {ClassEnums} from '../dictionaries/class-enums';
import {FractionsEnum} from '../dictionaries/fractions';
import {SkillTypesEnum} from '../dictionaries/skill-types.enum';

export interface ICharacter extends IBaseEntity {
  name: string;
  description: string;
  className: ClassEnums;
  fraction: FractionsEnum;
  baseParams: ICharacterParams;
  passiveSkillId: number;
  combatSkillsIds: number[];
  altSkillsIds: number[];
  equipmentsIds: number[];
}
export interface IEquipParams {
  endurance: number;
  armor: number;
  defence: number;
  power: number;
  dodgeChance: number;
  blockChance: number;
  parryChance: number;
  crashChance: number;
}

export interface ICharacterParams extends IEquipParams {
  health: number;
}

interface ISkill {
  id: number;
  name: string;
  description: string;
  typeSkill: SkillTypesEnum;
  className: ClassEnums;
}

export interface IEquipment extends IBaseEntity {
  classRequired: ClassEnums;
  name: string;
  description: string;
  equipClass: string;
  equipParams: IEquipParams;
}
