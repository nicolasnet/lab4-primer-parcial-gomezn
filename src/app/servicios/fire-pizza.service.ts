import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Pizza } from '../clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class FirePizzaService {

  private dbpath = '/pizzas'; //ruta de la coleccion de firebase.
  pizzasRef: AngularFirestoreCollection<Pizza>;
  pizzas:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.pizzasRef = db.collection(this.dbpath);
    this.pizzas=this.pizzasRef.valueChanges(this.dbpath);
  }

  getAll(){
    return this.pizzas;
  }

  create(mensaje: Pizza): any{
    console.log("Entro a funcion create");
    return this.pizzasRef.add({...mensaje});
  }

  update(id: string, data: any): Promise<void> {
    return this.pizzasRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.pizzasRef.doc(id).delete();
  }
}
