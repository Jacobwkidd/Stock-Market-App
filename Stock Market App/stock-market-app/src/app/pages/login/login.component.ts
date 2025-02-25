import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }
}