import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Person } from 'src/app/classes/person';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private personaService: PersonaService) { }
  
  getUsers(): Person[] {
    return this.personaService.getUserList();
  }

  ngOnInit(): void {
  }

}
