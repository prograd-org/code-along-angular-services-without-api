import { User } from 'src/app/model/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService extends User {

  user: User[] = [];


  constructor() {
    super();
  }

  addUser(user: User){

    this.user.push(user);
  }

  getUser(): User[]{

    return this.user;
  }
}
