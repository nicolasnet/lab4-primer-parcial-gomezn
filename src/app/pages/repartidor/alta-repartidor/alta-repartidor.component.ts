import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/clases/repartidor';
import { FireRepartidorService } from 'src/app/servicios/fire-repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  @Input() paisParaMostrar: object;
  @Output() eventNuevoRepartidor: EventEmitter<any> = new EventEmitter<any>();
  public forma: FormGroup;
  listaActores: any;

  constructor(private fb: FormBuilder, private repartidorService: FireRepartidorService) {
    // this.repartidorService.getAll().subscribe(actores =>{
      
    //   this.listaActores=actores;
    // })
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required], this.spaceValidator],
      'dni':['', [Validators.required, Validators.max(99999999)]],     
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'capacidad': ['', Validators.required],
      'unidadPropia': ['', Validators.required],
      'pais': [''],      
    });
  }


  private async spaceValidator(control: AbstractControl): Promise<object>{
    console.log("entra en spaceControl");
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios: true
      };
    }else{
      return null;
    }
  }


  nuevoRepartidor(){
    
    const repartidorNuevo = new Repartidor;
    
    repartidorNuevo.nombre = this.toTitleCase(this.forma.get('nombre').value.toUpperCase());
    repartidorNuevo.dni = this.forma.get('dni').value;
    repartidorNuevo.edad = this.forma.get('edad').value;
    repartidorNuevo.capacidad = this.forma.get('capacidad').value;
    repartidorNuevo.unidadPropia = this.forma.get('unidadPropia').value;
    repartidorNuevo.pais = this.paisParaMostrar;
    
    this.repartidorService.create(repartidorNuevo);    
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();    
}
  

}
