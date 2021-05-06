import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class FireRepartidorService {

  private dbpath = '/repartidores'; //ruta de la coleccion de firebase.
  repartidoresRef: AngularFirestoreCollection<Repartidor>;
  repartidor:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.repartidoresRef = db.collection(this.dbpath);
    this.repartidor=this.repartidoresRef.valueChanges(this.dbpath);
  }

  getAll(){
    return this.repartidor;
  }

  create(mensaje: Repartidor): any{
    console.log("Entro a funcion create");
    return this.repartidoresRef.add({...mensaje});
  }

  update(id: string, data: any): Promise<void> {
    return this.repartidoresRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.repartidoresRef.doc(id).delete();
  }
}
