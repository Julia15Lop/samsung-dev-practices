import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: "Julia", surname: "Lopez", age: 23, color: "red", sex: "woman", dni: "03042034C", birth: new Date() },
      { id: 2, name: "Natalia", surname: "Lopez Sánchez", age: 23, color: "red", sex: "woman", dni: "03042034C", birth: new Date()}
    ];
    return {users};
  }

  public genId(users: User[]): number {
    console.log();
    return users.length > 0 ? Math.max( ...users.map(user => user.id) as Array<number> )+1 : 1;
  }
}