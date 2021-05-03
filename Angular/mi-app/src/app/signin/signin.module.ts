import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MaterialModule
  ]
})
export class SigninModule { }
