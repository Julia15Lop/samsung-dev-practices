import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../services/people.service';
import { Person } from '../interfaces/people';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  private id: number;
  

  constructor(private personService: PeopleService, private router: Router,
    private activeRoute: ActivatedRoute) {
    
    this.id = this.activeRoute.snapshot.params['id'];
      
  }

  ngOnInit(): void {
    this.deletePerson(this.id);
  }
  
  /* Delete Person */
  public deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(
      res => {
        this.personService.redirectToPersonList();
        alert("Eliminada");
      },
      (error) => {
        console.log("[ERROR] No se pudo borrar");
        alert("No se ha borrado la persona indicada")
      }
    );
  }

}
