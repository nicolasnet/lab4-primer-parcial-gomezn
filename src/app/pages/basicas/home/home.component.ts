import { Component, OnInit } from '@angular/core';
import { FirebaseBasicService } from 'src/app/servicios/firebase-basic.service';
import { GitServiceService } from 'src/app/servicios/git-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gitUsuario:any = new Object;
  listaDatos: any;
  dato: object ={'texto': "prueba llegar a Firebase", 'pais': "Argentina" }

  constructor(private dataService: FirebaseBasicService, private gitService: GitServiceService) {
    
      this.gitService.getGitHub().subscribe(resultado => {
      this.gitUsuario = resultado;
      
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
    console.log(this.gitUsuario.login);
    // this.dataService.getAll().subscribe(datos =>{
    //   this.listaDatos=datos;
    // })
   }

  ngOnInit(): void {
  }

  crearDato(){
    this.dataService.create(this.dato);
    console.log(this.listaDatos)
  }

}
