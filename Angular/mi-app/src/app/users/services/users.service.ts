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
  
  private baseUrl: string;
  private id: number;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.id = 1;
  }
  
  /* Get Users method */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  /* GET User by Id */
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  /* POST User */
  public addUser(postUserData: Object): Observable<User> {
    this.id = this.id + 1;
    return this.http.post<User>(`${this.baseUrl}/users`, postUserData);
  }

  /* PUT User data */
  public putUser(updateUserData: Object, id: number): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${id}`, updateUserData);
  }
  
  /* DELETE User by ID */
  public  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

}
