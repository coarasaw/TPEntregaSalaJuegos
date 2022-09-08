import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncuestaService } from 'src/app/servicios/encuesta.service';
import Swal from 'sweetalert2';
import { Encuesta } from '../../../clases/encuesta';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public formulario!: FormGroup;
  public encuesta?: Observable<any[]>;
  public elemento: any;
  emailConectado: string;

  constructor(
    private router: Router,
    private frB: FormBuilder, 
    public _unaEncuesta: EncuestaService,
  ) 
  { 
    this.emailConectado = this.obtener_localstorage();
  }

  ngOnInit(): void {
    this.formulario = this.frB.group( {
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(110)]],
      'telefono': ['', [Validators.required]],
      'juego': ['', [Validators.required]],
      'puntuacion': ['', [Validators.required]],
      'opinion': ['', [Validators.required]],
      'terminos': ['', Validators.required],
    });
  }

  aceptar(): void {
    
    const encuestaDatos: Encuesta = {
      uemail: this.emailConectado,
      nombre: this.formulario?.controls['nombre'].value,
      apellido: this.formulario?.controls['apellido'].value,
      edad: this.formulario?.controls['edad'].value,
      telefono: this.formulario?.controls['telefono'].value,
      juego: this.obtenerValor(this.formulario?.controls['juego'].value),
      puntuacion: this.formulario?.controls['puntuacion'].value,
      opinion: this.formulario?.controls['opinion'].value,
      terminos: this.formulario?.controls['terminos'].value
    }
    
    this._unaEncuesta.crearEncuesta(encuestaDatos).then(data => {
      this.muestraMensaje("correcta");
          }).catch( (err: any) => {
            this.muestraMensaje("error");
    });
  }

  obtenerValor(juego: string): string {
    switch (juego) {
      case 'A':
        juego = "Ahorcado";
        break;
      case 'M':
        juego = "Mayor o Menor";
        break;
      case 'C':
        juego = "Como se Juega";
        break;
      case 'P':
        juego = "Preguntados";
        break;
    }
    return juego;
  }


  //probando el swal
  muestraMensaje(aux: string){
    if(aux == "correcta"){
      Swal.fire({
        icon: 'success',
        title: '¡Muchas gracias por su tiempo!',
        text: 'Encuesta enviada exictosamente! ',
      }).finally(()=>{
        this.router.navigate(['/inicio']);
      });
    }
    if(aux == "error"){
      Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'Ocurrio un error en la carga de la encuesta',
      }).finally(()=>{
        this.router.navigate(['/inicio']);
      });
    }
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    return datoUsuario.email;
  }
}
