import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/services/users/users.service';

@Component({
  selector: 'users-lista',
  templateUrl: './users-lista.component.html',
  styleUrls: ['./users-lista.component.css']
})
export class UsersListaComponent implements OnInit {

  users: [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(users=>{
      this.users = users;
    }, (error)=>{

    },()=>{
      
    });
  }

  ngOnInit(): void {
  }

}
