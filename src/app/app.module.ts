import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './modules/components/portada/portada.component';
import { FormsModule } from '@angular/forms';
import { VentasListaComponent } from './modules/components/ventas-lista/ventas-lista.component';
import { ModalIngresoComponent } from './modules/components/modal-ingreso/modal-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    VentasListaComponent,
    ModalIngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
