import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { retry, catchError } from 'rxjs/operators';

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

  /* GET User by Id */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  /* DELETE User by ID */
  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

}
