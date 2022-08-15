import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatPageComponent } from './combat-page.component';
import {AvatarComponent} from '../../components/avatar/avatar.component';
import {CombatInterfaceComponent} from '../../components/combat-interface/combat-interface.component';
import {CombatPageRoutingModule} from './combat-page-routing.module';



@NgModule({
  declarations: [CombatPageComponent, AvatarComponent, CombatInterfaceComponent],
  imports: [
    CommonModule,
    CombatPageRoutingModule
  ]
})
export class CombatPageModule { }
