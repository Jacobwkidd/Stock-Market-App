import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkAuthStatus());
  authStatus$: Observable<boolean> = this.isAuthenticated.asObservable();

  constructor() {}

  private checkAuthStatus(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  login(username: string, password: string): boolean { // ✅ Returns boolean
    if (username === 'admin' && password === 'password') { // Replace with actual authentication logic
      localStorage.setItem('auth', 'true');
      this.isAuthenticated.next(true);
      return true; // ✅ Now it returns true if login is successful
    }
    return false; // ✅ Returns false if login fails
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.isAuthenticated.next(false);
  }
}
