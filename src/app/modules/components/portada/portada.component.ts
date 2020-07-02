import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  fecha = new Date();
  ingreso = {
    valor: 0.00,
  };
  egreso = {
    valor: 0.00,
    concepto: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  registrarIngreso(ingreso: NgForm){
    alert(ingreso.value.valor)
  }

  registrarEgreso(egreso: NgForm){
    alert(egreso.value.valor)
  }
}
