import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtejidaComponent } from './protejida.component';

const routes: Routes = [
  {
    path: '', component: ProtejidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtejidaRoutingModule { }
