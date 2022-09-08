import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/servicios/error.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  muestroCorreo: string;
  muestroClave: string;
 
  constructor(private rutas:Router,
              private fb: FormBuilder,
              private afAuth : AngularFireAuth,
              private _errorService: ErrorService,
              private toastr: ToastrService  
  ){
    
    this.loginForm = this.fb.group({
      usuarioCorreo: ['',[Validators.required,Validators.email]],
      usuarioClave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  automaticoLogin(){
    //this.VendedorForm.controls['nombres'].setValue(response.body.data.nombres);
    this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('pepe123');
  }

  adinistradorLogin(){
    this.loginForm.controls['usuarioCorreo'].setValue('admin@gmail.com');
    this.loginForm.controls['usuarioClave'].setValue('admin123');
  }

  loginSiguiente(){
      //console.log(this.loginForm)
      const usuario = this.loginForm.get('usuarioCorreo')?.value;
      const password = this.loginForm.get('usuarioClave')?.value;

      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(usuario,password).then((respuesta) => {
      //console.log(respuesta);
      this.loading = false;
      this.setLocalStorage(respuesta.user);
      this.rutas.navigate(['/inicio']);
    }, error => {
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code),'Error')
      this.loginForm.reset();
    }) 
  }

  setLocalStorage(user: any){
    const usuario: User = {
      uid: user.uid,
      email: user.email
    }
    localStorage.setItem('user', JSON.stringify(usuario)); 
  }

}
