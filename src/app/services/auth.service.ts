import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: any): boolean {

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(
      (u: any) => u.email === user.email
    );

    if (existingUser) {
      return false;
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  login(email: string, password: string): boolean {

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) =>
        u.email === email &&
        u.password === password
    );

    if (user) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(user)
      );
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser() {
    return JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );
  }
}