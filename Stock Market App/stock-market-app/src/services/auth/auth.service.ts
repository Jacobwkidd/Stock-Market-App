import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean { // ✅ Accepts parameters
    if (username === 'admin' && password === 'password') { // ✅ Replace with real authentication logic
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
      return true; // ✅ Returns a boolean to indicate success
    }
    return false; // ✅ Returns false if login fails
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('auth') === 'true';
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }
}
