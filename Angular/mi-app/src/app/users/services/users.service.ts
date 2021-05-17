import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../interfaces/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  
  /* Get Users method */
  public getUsers(): Observable<User[]> {
    console.log(this.baseUrl);
    return this.http.get<User[]>(`${this.baseUrl}/users/users`).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /* GET User by Id */
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`).pipe(
      tap(u => console.log(`Fetched User id=${id}`)),
      catchError(this.handleError<User>('searchUser'))
    );
  }

  /* POST User */
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/users`, user).pipe(
      tap((newUser: User) => console.log("User added")),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /* PUT User data */
  public putUser(updateUserData: Object, id: number): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${id}`, updateUserData);
  }
  
  /* DELETE User by ID */
  public  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/users/users/${id}`).pipe(
      tap(_ => console.log("Deleted user" + id)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}
