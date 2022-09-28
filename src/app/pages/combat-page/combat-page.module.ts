import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CombatPageComponent} from './combat-page.component';
import {CombatPageRoutingModule} from './combat-page-routing.module';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [CombatPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CombatPageRoutingModule
  ]
})
export class CombatPageModule {
}
