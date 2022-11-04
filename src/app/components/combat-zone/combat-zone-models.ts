export interface ICombatZoneConfig {
  hex0: IHex;
  hex1: IHex;
  hex2: IHex;
  hex3: IHex;
  hex4: IHex;
  hex5: IHex;
  hex6: IHex;
  hex7: IHex;
  hex8: IHex;
  hex9: IHex;
}

interface IHex {
  type: CombatZoneConfigTypes;
  imgUrl: string | null;
  id: number;
}

export enum CombatZoneConfigTypes {
  EMPTY = 'EMPTY',
  CHARACTER = 'CHARACTER',
  FILLER = 'FILLER',
}
