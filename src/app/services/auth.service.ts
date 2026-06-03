import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(user: any): boolean {

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(
      (u: any) => u.email === user.email
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name: user.name,
      email: user.email,
      password: user.password
    };

    users.push(newUser);

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
      if (!user.id) {
        user.id = Date.now().toString();
        localStorage.setItem('users', JSON.stringify(users));
      }

      const safeUser = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      localStorage.setItem(
        'currentUser',
        JSON.stringify(safeUser)
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