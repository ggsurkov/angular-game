import {Component, Input, OnInit} from '@angular/core';
import {CombatZoneConfigTypes, ICombatZoneConfig} from './combat-zone-models';

@Component({
  selector: 'app-combat-zone',
  templateUrl: './combat-zone.component.html',
  styleUrls: ['./combat-zone.component.scss']
})
export class CombatZoneComponent implements OnInit {
  @Input() config: ICombatZoneConfig = {
    hex0: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex1: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex2: {
      type: CombatZoneConfigTypes.CHARACTER,
      imgUrl: './assets/avatars/battle-icons/Amaji_Bicon.png',
      id: 1,
    },
    hex3: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex4: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex5: {
      type: CombatZoneConfigTypes.CHARACTER,
      imgUrl: './assets/avatars/battle-icons/Frank_Big_Noise_BIcon.png',
      id: 2,
    },
    hex6: {
      type: CombatZoneConfigTypes.CHARACTER,
      imgUrl: './assets/avatars/battle-icons/Hikari_Hosho_Bicon.png',
      id: 3,
    },
    hex7: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex8: {
      type: CombatZoneConfigTypes.EMPTY,
      imgUrl: '',
      id: 0,
    },
    hex9: {
      type: CombatZoneConfigTypes.CHARACTER,
      imgUrl: './assets/avatars/battle-icons/Holy_Doly_Bicon.png',
      id: 4,
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
