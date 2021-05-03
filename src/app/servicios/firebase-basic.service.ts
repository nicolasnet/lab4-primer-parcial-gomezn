import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseBasicService {

  private dbpath = '/datos'; //ruta de la coleccion de firebase.
  dataRef: AngularFirestoreCollection<any>;//en el any va la clase del tipo de dato
  datos:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.dataRef = db.collection(this.dbpath);
    this.datos=this.dataRef.valueChanges(this.dbpath);
  }

  getAll(){
    return this.datos;
  }

  create(mensaje: any): any{
    console.log("Entro a funcion create");
    return this.dataRef.add({...mensaje});
  }

  update(id: string, data: any): Promise<void> {
    return this.dataRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.dataRef.doc(id).delete();
  }
}
