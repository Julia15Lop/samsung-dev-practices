import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PEOPLE } from 'src/app/helpers/mock-people';
import { Person } from '../interfaces/people';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  private id: number;

  people: Person[] = PEOPLE;
  person: Person | undefined;


  constructor(private peopleService: PeopleService,
    private activeRoute: ActivatedRoute) {
    
    this.id = this.activeRoute.snapshot.params['id'];
      
    this.updateForm = new FormGroup({
      id: new FormControl(),
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
    this.showPersonInfo();
  }

  /* Show fields */
  public showPersonInfo() {
    this.getPersonById(this.id);
  }
  
  /* GET Person by ID */
  public getPersonById(id: number) {
    this.peopleService.getPersonById(id).subscribe(
      person => {
        this.updateForm.patchValue(person);
        this.person = person;
        return person;
      },
      (error) => {
        console.log("[ERROR] No se encontró a la person");
      }
    )
  }

  /* Update register */
  public saveChanges() {
    this.peopleService.putPerson(this.updateForm.value, this.id).subscribe(
      () => {
        this.peopleService.redirectToPersonList()
        alert("Actualizada");
      },
      (error) => {
        console.log("[ERROR] No se pudieron guardar los cambios");
        alert("No se pudieron guardar los cambios");
      }
    
    );
  }
}
