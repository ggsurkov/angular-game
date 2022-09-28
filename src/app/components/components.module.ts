import { NgModule } from '@angular/core';
import {CombatZoneComponent} from './combat-zone/combat-zone.component';
import {ZoneHexComponent} from './combat-zone/zone-hex/zone-hex.component';
import {CombatInterfaceComponent} from './combat-interface/combat-interface.component';
import {AvatarComponent} from './avatar/avatar.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [CombatZoneComponent, ZoneHexComponent, CombatInterfaceComponent, AvatarComponent],
  exports: [CombatZoneComponent, ZoneHexComponent, CombatInterfaceComponent, AvatarComponent]
})
export class ComponentsModule { }
