import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authservice {

  users: any[] = [];

  constructor() {

    const savedUsers = localStorage.getItem('users');

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }

  }

  register(user: any) {

    this.users.push(user);

    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string) {

    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {

      localStorage.setItem(
        'loggedUser',
        JSON.stringify(user)
      );

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }

  getLoggedUser() {

    const user = localStorage.getItem('loggedUser');

    return user ? JSON.parse(user) : null;
  }

  isLoggedIn() {
    return this.getLoggedUser() !== null;
  }
}