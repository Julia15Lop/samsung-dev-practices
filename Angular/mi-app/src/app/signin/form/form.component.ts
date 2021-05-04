import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signinForm: FormGroup;

  constructor() {
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      birth: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required)
    });
    
  }

  onSubmit() {
    console.log(this.signinForm.value);
  }
  ngOnInit(): void {
  }

}
