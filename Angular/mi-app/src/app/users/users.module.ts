import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { FindComponent } from './find/find.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DeleteComponent,
    FindComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
