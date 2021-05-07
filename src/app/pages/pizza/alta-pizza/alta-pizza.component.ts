import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/clases/pizza';
import { FirebaseBasicService } from 'src/app/servicios/firebase-basic.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  public forma: FormGroup;
  nuevaEncuesta: Pizza;

  constructor(private fb: FormBuilder, private fireService: FirebaseBasicService, private ruta: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required], this.spaceValidator],
      'Ingredientes':['', [Validators.required], this.spaceValidator],
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



  NuevaEncuesta(){
    const encuestaNueva = new Pizza;
    // encuestaNueva.usuario = localStorage.getItem('usuario');
    // encuestaNueva.nombre = this.toTitleCase(this.forma.get('nombre').value);
    // encuestaNueva.apellido = this.toTitleCase(this.forma.get('apellido').value);
    // encuestaNueva.edad = this.forma.get('edad').value;
    // encuestaNueva.celular = this.forma.get('celular').value;
    // encuestaNueva.puntaje = this.forma.get('puntaje').value;
    // encuestaNueva.opinion = this.forma.get('opinion').value;
    // encuestaNueva.favorito = this.forma.get('favorito').value;
    // this.fireService.create(encuestaNueva);
    this.ruta.navigate(["/home"]);
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();   
  }

}
