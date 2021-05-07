import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/clases/pizza';
import { FirePizzaService } from 'src/app/servicios/fire-pizza.service';
import { FirebaseBasicService } from 'src/app/servicios/firebase-basic.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  public forma: FormGroup;
  nuevaPizza: Pizza;

  constructor(private fb: FormBuilder, private fireService: FirePizzaService, private ruta: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required], this.spaceValidator],
      'Ingredientes':['', Validators.required],
      'peso': ['', Validators.required],
      'precio': ['', Validators.required],
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



  NuevaPizza(){
    const encuestaNueva = new Pizza;
    
    encuestaNueva.nombre = this.toTitleCase(this.forma.get('nombre').value);
    encuestaNueva.ingredientes = this.toTitleCase(this.forma.get('Ingredientes').value);
    encuestaNueva.precio = this.forma.get('precio').value;
    encuestaNueva.peso = this.forma.get('peso').value;
    this.fireService.create(encuestaNueva);
    this.ruta.navigate(["/home"]);
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();   
  }

}
