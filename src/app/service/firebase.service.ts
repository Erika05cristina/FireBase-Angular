import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Musica } from '../domain/musica';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }
  save (musica: Musica)
  {
    //canciones es el nombre de la coleccion en Firestore
    addDoc(collection(this.firestore, 'canciones'), Object.assign({}, musica));
  }  
  getMusica()
  {
    return getDocs(query(collection(this.firestore, 'canciones')));
  }
}
