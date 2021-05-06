import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-repartidor',
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.css']
})
export class FormRepartidorComponent implements OnInit {

  paisSeleccionado: object;

  constructor() { }

  ngOnInit(): void {
  }

  CargarPaisSeleccionado(pais: object){
    this.paisSeleccionado = pais;
  }

}
