import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from 'src/app/helpers/mock-users';
import { User } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  private id: number;

  users: User[] = USERS;
  user: User | undefined;


  constructor(private userService: UsersService,
    private activeRoute: ActivatedRoute, private router: Router) {
    
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
  }

  /* Show fields */
  public showUserInfo() {
    
  }
  
  /* Update register */
  public saveChanges() {
    console.log(this.updateForm.value)
  }

}