import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../interfaces/people'
import { PeopleService } from '../services/people.service';
//import { PEOPLE } from 'src/app/helpers/mock-people';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];


  displayedColumns: string[] = ['_id', 'name', 'surname', 'age', 'dni', 'color', 'birth', 'sex', 'actions']
  
  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getPeople();
  }

  /* GET all people */
  public getPeople(): void {
    this.peopleService.getPeople().subscribe(
      people => this.people = people,
      (error) => {
        console.log("[ERROR] Usuarios no encontrados");
        alert("[ERROR] Usuarios no encontrados");
      }
    
    );
  }
  /* Redirect to Delete Function */
  public redirectToDelete(id: number) {
    const deleteURL: string = `/people/delete/${id}` ;
    this.router.navigate([deleteURL]);
  }

  /* Redirect to Update Function */
  public redirectToUpdate(id: number) {
    const updateURL: string = `/people/update/${id}`;
    this.router.navigate([updateURL]);
  }

}
