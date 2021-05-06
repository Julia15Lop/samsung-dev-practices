import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/users'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  date = new Date();

  users: User[] = [
    { _id: 1, _name: "Julia", _surname: "Lopez", _age: 23, _color: "red", _sex: "woman", _dni: "030042034C", _birth: this.date },
    { _id: 2, _name: "Natalia", _surname: "Lopez Sánchez", _age: 23, _color: "red", _sex: "woman", _dni: "030042034C", _birth: this.date}
  ]

  displayedColumns: string[] = ['_id', '_name', '_surname', 'actions']
  constructor() { }

  ngOnInit(): void {
    
  }

}
