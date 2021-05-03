import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/basicas/error/error.component';
import { HomeComponent } from './pages/basicas/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
