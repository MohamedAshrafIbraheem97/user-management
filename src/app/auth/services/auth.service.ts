import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/enums/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole!: Role;
  private loggedIn = false;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(username: string, password: string): boolean {
    if (username === 'a@a.com' && password === 'admin') {
      this.currentUserRole = Role.Admin;
      this.loggedIn = true;
      return true;
    } else if (username === 'u@u.com' && password === 'user') {
      this.currentUserRole = Role.User;
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUserRole = Role.None;
    this.router.navigate(['/login']);
  }

  getUserRole(): Role {
    return this.currentUserRole;
  }
}
