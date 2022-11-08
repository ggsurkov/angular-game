import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: 'combat-page', loadChildren: () => import('./pages/combat-page/combat-page.module').then(m => m.CombatPageModule),
  },
  {
    path: 'landing', loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
  },
  {
    path: '', redirectTo: '/landing', pathMatch: 'full',
  },
  {
    path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
