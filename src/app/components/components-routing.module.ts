import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth.guard';
import { authGuard } from '../services/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'precios', loadChildren: () => import('./precios/precios.module').then(m => m.PreciosModule)
  },
  {
    path: 'protejida', loadChildren: () => import('./protejida/protejida.module').then(m => m.ProtejidaModule),
    canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
