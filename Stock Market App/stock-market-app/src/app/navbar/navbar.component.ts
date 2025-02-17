import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; // ✅ Import Material Menu
import { Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, RouterModule, SearchComponent], // ✅ Added MatMenuModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownOpen: boolean = false;
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  handleSearch(term: string): void {
    console.log('Search Term:', term);
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownElement = document.getElementById('dropdown-menu'); // Identify the dropdown
    const buttonElement = document.getElementById('dropdown-button'); // Identify the button

    if (
      dropdownElement && !dropdownElement.contains(target) &&
      buttonElement && !buttonElement.contains(target)
    ) {
      this.dropdownOpen = false;
    }
  }

}
