import { Injectable } from '@angular/core';
import { Person } from '../classes/person'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /* Attribute */
  private userList: Person[];

  constructor() {
    this.userList = [];
  }

  public getUserList(): Person[] {
    return this.userList;
  }
}
