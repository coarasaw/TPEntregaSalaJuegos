import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MenujuegosComponent } from './menujuegos/menujuegos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AgilidadComponent } from './agilidad/agilidad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenujuegosComponent,
    AhorcadoComponent,
    MayoromenorComponent,
    PreguntadosComponent,
    AgilidadComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class JuegosModule { }
