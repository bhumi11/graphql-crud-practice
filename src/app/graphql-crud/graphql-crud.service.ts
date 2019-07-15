import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import * as Query from './../global-query';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlCrudService {
 
  public users: Observable<Query.User[]> // List of Users
  constructor(private apollo: Apollo) { }

  /** Get all user */
  public getUsers() {
    this.users = this.apollo.watchQuery<Query.Query>({ query: Query.Users, fetchPolicy: 'no-cache' })
      .valueChanges.pipe(
        map((result: any) => result.data.users));
    return this.users;
  }

  /** create user */
  public createUser(name) {
    debugger
    return this.apollo
      .mutate({
        mutation: Query.addUser,
        variables: {
          name
        }
      });
  }

  /** removes user */
  public removeUser(id: number) {
    return this.apollo
      .mutate({
        mutation: Query.removeUser,
        variables: {
          id
        }
      });
  }

  /** updates user */
  public updateUser(id, name) {
    return this.apollo
      .mutate({
        mutation: Query.updateUser,
        variables: {
          id,
          name
        }
      });
  }
}
