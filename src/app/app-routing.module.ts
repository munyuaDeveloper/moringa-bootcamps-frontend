import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing-module/landing-module.module').then(m => m.LandingModuleModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
