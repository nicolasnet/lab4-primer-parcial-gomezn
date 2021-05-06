import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './pages/basicas/error/error.component';
import { HomeComponent } from './pages/basicas/home/home.component';
import { MenuComponent } from './pages/basicas/menu/menu.component';
import { LoginComponent } from './pages/basicas/login/login.component';
import { AuthService } from './servicios/auth.service';
import { AltaRepartidorComponent } from './pages/repartidor/alta-repartidor/alta-repartidor.component';
import { ListadoPaisesComponent } from './pages/listado-paises/listado-paises.component';
import { FormRepartidorComponent } from './pages/repartidor/form-repartidor/form-repartidor.component';
import { DetalleFormComponent } from './pages/detalleRepartidor/detalle-form/detalle-form.component';
import { DetalleRepartidorComponent } from './pages/detalleRepartidor/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidoresComponent } from './pages/detalleRepartidor/listado-repartidores/listado-repartidores.component';
import { DetallePaisComponent } from './pages/detalleRepartidor/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    AltaRepartidorComponent,
    ListadoPaisesComponent,
    FormRepartidorComponent,
    DetalleFormComponent,
    DetalleRepartidorComponent,
    ListadoRepartidoresComponent,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
