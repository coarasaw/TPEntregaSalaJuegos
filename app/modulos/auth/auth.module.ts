import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { LoginVerificarCorreoComponent } from './login-verificar-correo/login-verificar-correo.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginRegistrarComponent,
    LoginVerificarCorreoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
