import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/Auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // Save token
        this.router.navigate(['/']); // Redirect to homepage
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }

  loginWithPasskey(): void {
    // Simulated WebAuthn credential (in real world, use navigator.credentials)
    const mockCredential = {
      id: 'mock-id',
      rawId: 'mock-raw-id',
      type: 'public-key',
      response: {
        clientDataJSON: '...',
        authenticatorData: '...',
        signature: '...',
        userHandle: 'mock-user'
      }
    };
  
    this.authService.passkeyLogin(mockCredential).subscribe({
      next: (response: { token: string }) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: (_err: any) => {
        this.errorMessage = 'Passkey login failed.';
      }      
    });
  }
  
}