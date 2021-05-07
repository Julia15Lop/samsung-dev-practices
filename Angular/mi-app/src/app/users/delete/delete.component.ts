import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user: User | undefined;

  constructor( private userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.deleteUser(user.id).subscribe();
  }

}
