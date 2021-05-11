import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from 'src/app/users/add/add.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.signinForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(125)]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]')]),
      color: new FormControl('', [Validators.required, Validators.minLength(3)]),
      birth: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required)
    });
    
  }

  getErrorNameMsg() {
    if (this.signinForm.getError('required')) {
      return 'You must enter a value';
    }

    return this.signinForm.hasError('required') ? 'Enter a value' : '';
  }
  onSubmit() {
    console.log(this.signinForm.value);

  } 
  ngOnInit(): void {
  }

  /* Redirect to Add */
  // public redirectToAdd() {
  //   this.addComp.addUser(this.signinForm.value);
  //   //const updateURL: string = `/users/post`;
  //   //this.router.navigate([updateURL]);
  // }
}
