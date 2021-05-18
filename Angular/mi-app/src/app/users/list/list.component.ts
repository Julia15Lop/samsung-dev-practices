import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User} from '../interfaces/users'
import { UsersService } from '../services/users.service';
import { USERS } from 'src/app/helpers/mock-users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = USERS;


  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'dni', 'color', 'birth', 'sex', 'actions']
  
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  /* GET all users */
  public getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }
  /* Redirect to Delete Function */
  public redirectToDelete(id: number) {
    const deleteURL: string = `/users/delete/${id}` ;
    this.router.navigate([deleteURL]);
  }

  /* Redirect to Update Function */
  public redirectToUpdate(id: number) {
    const updateURL: string = `/users/update/${id}`;
    this.router.navigate([updateURL]);
  }

}
