import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgilidadComponent } from './agilidad/agilidad.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayoromenorComponent } from './mayoromenor/mayoromenor.component';
import { MenujuegosComponent } from './menujuegos/menujuegos.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  { path: 'menujuegos', component: MenujuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent},
  { path: 'agilidad', component: AgilidadComponent},
  { path: 'mayoromenor', component: MayoromenorComponent},
  { path: 'preguntados', component: PreguntadosComponent},
  { path: '', redirectTo: 'menujuegos', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
