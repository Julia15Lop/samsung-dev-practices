import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }
  
  /* Get Users method */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
