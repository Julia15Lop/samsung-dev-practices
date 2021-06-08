import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../interfaces/people'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  private baseUrl: string;

  constructor(private http: HttpClient,
              private router: Router) {
    this.baseUrl = environment.baseUrl;
  }
  
  /* Get People method */
  public getPeople(): Observable<Person[]> {
    console.log(this.baseUrl);
    return this.http.get<Person[]>(`${this.baseUrl}/people`).pipe(
      catchError(this.handleError<Person[]>('getPeople', []))
    );
  }

  /* GET Person by Id */
  public getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/people/people/${id}`).pipe(
      tap(u => console.log(`Fetched Person id=${id}`)),
      catchError(this.handleError<Person>('searchPerson'))
    );
  }

  /* POST Person */
  public addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/people/people`, person).pipe(
      tap((newPerson: Person) => console.log("Person added")),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  /* PUT Person data */
  public putPerson(updatePersonData: Object, id: number): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/people/people/${id}`, updatePersonData);
  }
  
  /* DELETE Person by ID */
  public  deletePerson(id: number): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/people/people/${id}`).pipe(
      tap(_ => console.log("Deleted person" + id)),
      catchError(this.handleError<Person>('deleteHero'))
    );
  }

  /* Handle error */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /* Redirect to People List */
  public redirectToPersonList = () => {
    this.router.navigate(['/people/list']);
  }
}
