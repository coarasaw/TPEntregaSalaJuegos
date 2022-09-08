import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private _firestore: AngularFirestore) { }

  crearEncuesta(encuesta: Encuesta){
    return this._firestore.collection('encuestas').add(encuesta);
  }
}
