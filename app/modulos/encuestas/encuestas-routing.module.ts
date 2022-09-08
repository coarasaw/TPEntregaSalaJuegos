import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  {
    path: '',
    component: EncuestaComponent ,
   // canActivate: [UsuarioLogueadoGuard] 
  },
  { path:'encuesta', component: EncuestaComponent , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
