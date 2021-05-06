import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FireRepartidorService } from 'src/app/servicios/fire-repartidor.service';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent implements OnInit {

  // @Input() peliculaParaMostrar: Pelicula;
  listadoActores:any;
  actoresDePeliSeleccionada: any;
  cantidadActores: number;
  @Output() eventActorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: FireRepartidorService) {
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoActores = resultado;
      this.cantidadActores = this.listadoActores.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionActor(actor:object){
    this.eventActorSeleccionado.emit(actor);
  }

  // actoresDePeliParaMostrar(){
  //   if(this.peliculaParaMostrar){
  //     this.actoresDePeliSeleccionada = this.peliculaParaMostrar.actores;
  //     return true;
  //   }
  // }
}
