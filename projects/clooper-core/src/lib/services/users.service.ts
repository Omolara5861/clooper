import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(users: User[]) {
    return users;
  }
}
