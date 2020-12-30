import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './modules/components/portada/portada.component';
import { FormsModule } from '@angular/forms';
import { VentasListaComponent } from './modules/components/ventas-lista/ventas-lista.component';
import { ModalIngresoComponent } from './modules/components/modal-ingreso/modal-ingreso.component';
import { AdministradorComponent } from './modules/components/administrador/administrador/administrador.component';
import { HttpClientModule } from '@angular/common/http';
import { ConceptosListaComponent } from './modules/components/administrador/conceptos-lista/conceptos-lista.component';
import { UsersListaComponent } from './modules/components/administrador/users-lista/users-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    VentasListaComponent,
    ModalIngresoComponent,
    AdministradorComponent,
    ConceptosListaComponent,
    UsersListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
