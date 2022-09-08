import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-gral',
  templateUrl: './menu-gral.component.html',
  styleUrls: ['./menu-gral.component.css']
})

export class MenuGralComponent implements OnInit {
  email: string;

  constructor(private rutas: Router) {
    this.obtener_localstorage();
   }

  ngOnInit(): void {
  }

  quienSoy(){
    this.rutas.navigate(['quiensoy']);
  }
  inicio(){
    this.rutas.navigate(['inicio']);
  }
  logOut(){
    localStorage.removeItem('user')
    this.rutas.navigate(['auth/login']);
  }
  sala(){
    this.rutas.navigate(['juegos/menujuegos']);
  }

  encuesta(){
    this.rutas.navigate(['encuesta']);
  }

  listado() {
    this.rutas.navigate(['listado']);
  }
  
  chat(){
    this.rutas.navigate(['chat']);
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    this.email = datoUsuario.email;
  }

}
