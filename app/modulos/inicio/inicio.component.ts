import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  email:string;

  constructor() {
    this.obtener_localstorage();
   }

  ngOnInit(): void {
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    console.log(datoUsuario);
    this.email = datoUsuario.email;
  }
}
