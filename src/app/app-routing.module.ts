import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './modules/components/portada/portada.component';
import { VentasListaComponent } from './modules/components/ventas-lista/ventas-lista.component';
import { AdministradorComponent } from './modules/components/administrador/administrador/administrador.component';

const routes: Routes = [
  {path: '', redirectTo: 'portada', pathMatch: 'prefix'},
  {path: "portada", component: PortadaComponent, pathMatch: "full"},
  {path: "ventas", component: VentasListaComponent},
  {path: "administracion", component: AdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
