import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from '../people/interfaces/people';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      { id: 1, name: "Julia", surname: "Lopez", age: 23, color: "red", sex: "woman", dni: "03042034C", birth: new Date() },
      { id: 2, name: "Natalia", surname: "Lopez Sánchez", age: 23, color: "red", sex: "woman", dni: "03042034C", birth: new Date()}
    ];
    return {people};
  }

  public genId(people: Person[]): number {
    console.log();
    return people.length > 0 ? Math.max( ...people.map(person => person.id) as Array<number> )+1 : 1;
  }
}