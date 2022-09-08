import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JuegoService } from '../../../servicios/juego.service';
import { Juego } from '../../../clases/juego';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  suscriptionUser: Subscription = new Subscription();
  suscriptionList: Subscription = new Subscription();
  listJuegos: Juego[] = [];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _juegosService: JuegoService) { }

  ngOnInit(): void {
    this.loading = true;
    this.suscriptionUser = this.afAuth.user.subscribe(user => {
      //console.log(user);
      this.getJuegos();

      //Esto es para que este Logeado
      /* if (user && user.emailVerified) {
        // cargar listado
      } else {
        this.router.navigate(['/auth/login'])
      } */
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
    this.suscriptionList.unsubscribe();
  }

  getJuegos(){
    this.suscriptionList == this._juegosService.getListadoJuegos().subscribe(data =>{
      //console.log(data);
      this.listJuegos = [];
      this.loading = false;
      data.forEach((element:any) => {
        this.listJuegos.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      //console.log(this.listJuegos);
    })
  }
}
