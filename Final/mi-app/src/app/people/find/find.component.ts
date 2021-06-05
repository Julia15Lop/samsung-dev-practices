import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PEOPLE } from 'src/app/helpers/mock-people';
import { Person } from '../interfaces/people';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  id: number;
  //  users: User[] = USERS;
  person!: Person;

  constructor(private peopleService: PeopleService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  /* GET People by ID */
  public getPeopleById(id: number) {
    console.log(this.person);
    this.peopleService.getPersonById(id).subscribe(
      person => this.person = person,
      (error) => {
        console.log("Error al borrar usuario");
      }
    )
    console.log(this.person);
    return this.person
  }

}
