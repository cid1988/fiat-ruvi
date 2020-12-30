import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/modules/services/users/users.service';

@Component({
  selector: 'conceptos-lista',
  templateUrl: './conceptos-lista.component.html',
  styleUrls: ['./conceptos-lista.component.css']
})
export class ConceptosListaComponent implements OnInit {

  conceptos: [];

  constructor(private usersService: UsersService) {
    this.usersService.getConceptos().subscribe(conceptos=>{
      this.conceptos = conceptos;
    }, (error)=>{

    },()=>{
      
    });
  }

  ngOnInit(): void {
  }

}
