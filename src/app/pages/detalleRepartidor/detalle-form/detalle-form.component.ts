import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-detalle-form',
  templateUrl: './detalle-form.component.html',
  styleUrls: ['./detalle-form.component.css']
})
export class DetalleFormComponent implements OnInit {

  actorSeleccionado: Repartidor;

  constructor() { }

  ngOnInit(): void {
  }
  
  CargarActorSeleccionado(actor: Repartidor){
    this.actorSeleccionado = actor;
    console.log(actor);
  }

}
