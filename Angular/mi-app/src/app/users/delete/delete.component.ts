import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { User } from '../interfaces/users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  private id: number;
  

  constructor(private userService: UsersService, private router: Router,
    private activeRoute: ActivatedRoute) {
    
    this.id = this.activeRoute.snapshot.params['id'];
      
  }

  ngOnInit(): void {
    this.deleteUser(this.id);
  }
  
  /* Delete User */
  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      res => this.userService.redirectToUserList(),
      (error) => {
        console.log("Error al borrar usuario");
      }
    );
  }

}
