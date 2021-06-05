import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


import { PeopleService } from '../services/people.service';
import { Person } from '../interfaces/people';
import { ActivatedRoute, Router } from '@angular/router';
import { PEOPLE } from 'src/app/helpers/mock-people';
import { InMemoryDataService } from 'src/app/helpers/in-memory-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  private id: number;

  people: Person[] = PEOPLE;

  person: Person | undefined;

  constructor(private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private dataService: InMemoryDataService) {
    this.id = dataService.genId(this.people);

    this.addForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(125)]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]')]),
      color: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birth: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  /* Add person function */
  public add(): void {
    console.log(this.addForm.value);
    this.peopleService.addPerson(this.addForm.value).subscribe(
      person => {
        this.people.push(person);
        alert("Persona añadida");
        },
      (error) => {
        console.log("[ERROR] No se pudo añadir");
        alert("[ERROR] Persona no añadida");
      }
      
    );
    this.peopleService.redirectToPersonList();
  }
}
