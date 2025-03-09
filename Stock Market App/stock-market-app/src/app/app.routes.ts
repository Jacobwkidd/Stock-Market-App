import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { SearchComponent } from './Components/search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }, 
];
