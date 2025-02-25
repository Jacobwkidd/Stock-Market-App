import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GuestNavbarComponent } from './NavBar-Components/guest-navbar/guest-navbar.component';
import { NavbarComponent } from './NavBar-Components/navbar/navbar.component';
import { AuthService } from '../services/Auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, GuestNavbarComponent], // ✅ Ensure imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false; // ✅ Define property

  constructor(private authService: AuthService) {} // ✅ Inject AuthService

  ngOnInit() {
    // ✅ Subscribe to authentication status
    this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status;
    });

    // ✅ Check initial auth status
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}
