import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from 'src/app/helpers/mock-users';
import { InMemoryDataService } from 'src/app/helpers/in-memory-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  private id: number;

  users: User[] = USERS;

  user: User | undefined;

  constructor(private usersService: UsersService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private dataService: InMemoryDataService) {
    this.id = dataService.genId(this.users);

    this.addForm = new FormGroup({
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
  }

  /* Add user function */
  public addUser() {
    
    console.log(this.addForm.value);
  
    this.usersService.addUser(this.addForm.value).subscribe(
      data => { console.log("Añadido") },
      error => { console.log("Error al añadir usuario") }
      
    );
    // this.usersService.addUser().subscribe(
    //   (next) => console.log('User Added'),
    //   (error) => this.route.navigate(['/form']);
    // );
  }

  public add(): void {
    this.usersService.addUser(this.addForm.value)
      .subscribe(user => { this.users.push(user)
      });
  }

}
