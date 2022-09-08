import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
//Componentes Propios
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
//Modulos Propios
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ErrorComponent,
    InicioComponent,
    QuienSoyComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    SharedModule
  ]
})
export class ModulosModule { }
