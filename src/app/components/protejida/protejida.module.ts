import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtejidaRoutingModule } from './protejida-routing.module';
import { ProtejidaComponent } from './protejida.component';


@NgModule({
  declarations: [
    ProtejidaComponent
  ],
  imports: [
    CommonModule,
    ProtejidaRoutingModule
  ],
  exports: [ProtejidaComponent]
})
export class ProtejidaModule { }
