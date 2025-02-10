import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Public login page
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Default route (protected)
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect invalid routes to home
];
