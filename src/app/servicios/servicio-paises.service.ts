import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  private paisActual: string;

  constructor(private http: HttpClient) {
    
  }


  // getPaisActual(){
  //   return this.paisActual;
  // }

  // setPaisActual(pais: string){
  //   this.paisActual = pais;
  // }

  getTodosLosPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}