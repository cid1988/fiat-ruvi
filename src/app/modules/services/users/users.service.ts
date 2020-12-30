import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/users")
  }

  getConceptos():Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/conceptos")
  }

  registrarIngreso(data):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/ingreso",{data})
  }
  
  registrarEgreso(data):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/egreso",{data})
  }
}
