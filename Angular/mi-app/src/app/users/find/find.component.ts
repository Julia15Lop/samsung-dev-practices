import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { USERS } from 'src/app/helpers/mock-users';
import { User } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  id: number;
  //  users: User[] = USERS;
  user!: User;

  constructor(private usersService: UsersService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  /* GET User by ID */
  public getUserById(id: number) {
    console.log(this.user);
    this.usersService.getUserById(id).subscribe(
      user => this.user = user,
      (error) => {
        console.log("Error al borrar usuario");
      }
    )
    console.log(this.user);
    return this.user
  }

}
