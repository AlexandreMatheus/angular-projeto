import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'produtos', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'produtos', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
  {path: 'vendedores', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
  {path: 'tipos', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
  {path: 'pedidos', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
