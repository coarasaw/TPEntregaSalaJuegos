import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from 'src/app/servicios/juego.service';
import { Juego } from '../../../clases/juego';

@Component({
  selector: 'app-mayoromenor',
  templateUrl: './mayoromenor.component.html',
  styleUrls: ['./mayoromenor.component.css']
})
export class MayoromenorComponent implements OnInit {

  emailConectado: string;
  puntos: number = 0;

  vidas: number = 5;
  vidasTotal: number = 5;
  win: boolean = false;
  lose: boolean = false;

  arrayNumeros: number[] = [1,2,3,4,5,6,7,10,11,12];
  numero: number = 0;
  siguienteNumero: number = 0;


  mensajePuntosWin: string = '';
  mensajePuntosLose: string = '';
  mensajeFinal: string = '';
  smsFinal: boolean = false;

  constructor(public _unJuego: JuegoService,
    private rutas: Router){
     
    this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
    this.emailConectado = this.obtener_localstorage();
  }

  ngOnInit(): void {
  }

  Jugar(botonElegido: any){
    this.SiguienteRonda(this.numero, botonElegido);
  } 

  SiguienteRonda(numero:any, botonElegido:any){

    this.siguienteNumero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];

    if( (botonElegido == 'menor') && (this.siguienteNumero < numero) ){
      this.puntos++;
      this.mensajePuntosWin = 'BIEN, suma punto';
      this.win = true;
      this.lose = false;
    }

    if( (botonElegido == 'menor') && (this.siguienteNumero > numero) ){
      //this.puntos++;
      this.mensajePuntosLose = 'MAL, no suma punto';
      this.vidas = this.vidas - 1;
      this.lose = true;
      this.win = false;
    }

    if( (botonElegido == 'mayor') && (this.siguienteNumero > numero) ){
      this.puntos++;
      this.mensajePuntosWin = 'BIEN, suma punto';
      this.win = true;
      this.lose = false;
    }

    if( (botonElegido == 'mayor') && (this.siguienteNumero < numero) ){
      //this.puntos++;
      this.mensajePuntosLose = 'MAL, no suma punto';
      this.vidas = this.vidas - 1;
      this.lose = true;
      this.win = false;
    }
    this.numero = this.siguienteNumero;

    if(this.puntos === 5){
      
      //this.res.agregarResultado('Win', 'Mayor o Menor');

      this.mensajeFinal = 'GANASTE!!!';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;

    }


    if(this.vidas === 0){

      //this.res.agregarResultado('Lose', 'Mayor o Menor');

      this.mensajeFinal = 'Fin del juego!!!';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }
  }

  Repetir(){
    this.vidas = 5;
    this.puntos = 0;
    this.mensajePuntosLose = '';
    this.mensajePuntosWin = '';
    this.win = false;
    this.lose = false;
    this.smsFinal = false;

  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    return datoUsuario.email;
  }

  salirGame(){
    let date = new Date();
    let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    const puntajeJuego: Juego = {
      uemailJuego: this.emailConectado,
      nombreJuego: 'MayoroMeno',
      puntajeJuego: this.puntos.toString(),
      fechaJuego: fechaActual
    }
    this._unJuego.crearJuego(puntajeJuego);
    this.rutas.navigate(['juegos/menujuegos']);
  }
}
