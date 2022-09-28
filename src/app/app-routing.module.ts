import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: 'combat-page', loadChildren: () => import('./pages/combat-page/combat-page.module').then(m => m.CombatPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
