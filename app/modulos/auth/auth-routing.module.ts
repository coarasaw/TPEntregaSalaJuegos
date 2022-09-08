import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes Propios
import { LoginComponent } from './login/login.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { LoginVerificarCorreoComponent } from './login-verificar-correo/login-verificar-correo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: LoginRegistrarComponent},
  { path: 'recuperarclave', component: LoginVerificarCorreoComponent },
  { path: '', redirectTo: 'login',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
