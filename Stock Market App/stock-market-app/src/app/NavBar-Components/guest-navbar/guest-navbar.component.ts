import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/Auth/auth.service';


@Component({
  selector: 'app-guest-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './guest-navbar.component.html',
  styleUrls: ['./guest-navbar.component.css']
})
export class GuestNavbarComponent {
  constructor(public authService: AuthService) {}
}
