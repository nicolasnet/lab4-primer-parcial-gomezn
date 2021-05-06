import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn= false;
  errorIngreso=false;
  emailIngreso: string = "";
  contraIngreso: string = "";

  constructor(public firebaseService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


 async OnSignIn(email:string, password: string){
    console.log(this.firebaseService.isLoggedIn);

    await this.firebaseService.SignIn(email,password);
    console.log("prueba2");
    if(this.firebaseService.isLoggedIn){
      console.log("autorizado");
      localStorage.setItem('usuario', email)
      this.isSignedIn = true;
      this.router.navigate(['/altaRepartidor']);
    }
    else{
      this.errorIngreso=true;
      console.log("Error");
    }
  }



  CompletaIngreso(){
    console.log("entro a completar");
    this.emailIngreso= "admin@admin.com";
    this.contraIngreso = "123456";
  }


}
