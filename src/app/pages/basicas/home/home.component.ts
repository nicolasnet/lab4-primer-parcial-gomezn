import { Component, OnInit } from '@angular/core';
import { FirebaseBasicService } from 'src/app/servicios/firebase-basic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDatos: any;
  dato: object ={'texto': "prueba llegar a Firebase", 'pais': "Argentina" }

  constructor(private dataService: FirebaseBasicService) {
    this.dataService.getAll().subscribe(datos =>{
      this.listaDatos=datos;
    })
   }

  ngOnInit(): void {
  }

  crearDato(){
    this.dataService.create(this.dato);
    console.log(this.listaDatos)
  }

}
