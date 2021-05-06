import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ErrorComponent } from './pages/basicas/error/error.component';
import { HomeComponent } from './pages/basicas/home/home.component';
import { LoginComponent } from './pages/basicas/login/login.component';
import { FormRepartidorComponent } from './pages/repartidor/form-repartidor/form-repartidor.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'altaRepartidor', component: FormRepartidorComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
