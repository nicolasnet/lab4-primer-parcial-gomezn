import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  listadoPaises:any;
  cantidadPaises: number;
  @Output() eventPaisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: ServicioPaisesService) {
    this.miServicio.getTodosLosPaises().subscribe(resultado => {
      this.listadoPaises = resultado;
      this.cantidadPaises = this.listadoPaises.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionPais(pais:object){
    // this.traerDatos();
    this.eventPaisSeleccionado.emit(pais);
  }

}
