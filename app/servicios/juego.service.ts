import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Juego } from '../clases/juego';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private _firestore: AngularFirestore) { }

  crearJuego(juegoDato: Juego ){
    return this._firestore.collection('juegos').add(juegoDato);
  }

  getListadoJuegos(): Observable<any>{
    return this._firestore.collection('juegos').stateChanges();
  }
}
