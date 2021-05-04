import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/users.service';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor( private personService: PersonService ) { }

  ngOnInit(): void {

    this.personService.getPeople().subscribe(people => this.people = people);
  }

}
