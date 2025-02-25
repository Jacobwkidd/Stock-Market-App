import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { SearchComponent } from './Components/search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { inject } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: '', component: HomeComponent, canActivate: [() => inject(AuthGuard).canActivate()] }, 
  { path: 'portfolio', component: PortfolioComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
  { path: 'search', component: SearchComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
  { path: 'settings', component: SettingsComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, 
];
