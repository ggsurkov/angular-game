import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CombatPageComponent} from './combat-page.component';


const routes: Routes = [
  {
    path: '', component: CombatPageComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombatPageRoutingModule { }
