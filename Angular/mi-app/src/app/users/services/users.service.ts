import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
  
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`/users`);
  }

  getUserbyId(id: string): Observable<User> {
    return this.http.get<User>(`/user/${id}`);
  }
}

