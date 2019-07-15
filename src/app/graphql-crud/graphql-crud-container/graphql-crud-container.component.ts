import { Component, OnInit } from '@angular/core';
import * as Query from './../../global-query';
import { GraphqlCrudService } from '../graphql-crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graphql-crud-container',
  templateUrl: './graphql-crud-container.component.html',
  styleUrls: ['./graphql-crud-container.component.scss']
})
export class GraphqlCrudContainerComponent implements OnInit {

  // users: Query.User[]; // List of Users
  users: Observable<Query.User[]>; // List of Users
  constructor(private service: GraphqlCrudService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.users = this.service.getUsers();
  }

  /** Create User */
  public createUser(data) {
    
    this.service.createUser(data.name)
      .subscribe(({ data }) => {
        console.log(data);
        // this.getUsers();
        this.users = this.service.getUsers();
      }, (error) => {
        console.log('Error------', error);
      });
  }

  public updateUser(data) {
    debugger
    this.service.updateUser(data.id, data.name)
      .subscribe(({ data }) => {
        this.getUsers();
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }
  
  public deleteUser(id: number) {
    console.log("id------",id);
    this.service.removeUser(id)
      .subscribe(({ data }) => {
        console.log(data);
        this.getUsers();
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }
}
