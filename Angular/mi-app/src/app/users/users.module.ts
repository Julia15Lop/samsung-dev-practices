import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
