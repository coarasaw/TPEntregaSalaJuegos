import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadosRoutingModule } from './listados-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListadosModule { }
