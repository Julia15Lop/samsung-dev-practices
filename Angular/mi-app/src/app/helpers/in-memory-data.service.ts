import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: "Julia", surname: "Lopez", age: 23, color: "red", sex: "woman", dni: "030042034C", birth: new Date() },
      { id: 2, name: "Natalia", surname: "Lopez Sánchez", age: 23, color: "red", sex: "woman", dni: "030042034C", birth: new Date()}
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  public genId(users: User[]): number {
    console.log();
    return users.length > 0 ? Math.max( ...users.map(user => user.id) as Array<number> )+1 : 1;
    //return users.length > 0 ? Math.max(users.map(user => user.id)) + 1 : 1;
  }
}