import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninRoutingModule } from './signin-routing.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    MaterialModule
  ]
})
export class SigninModule { }
