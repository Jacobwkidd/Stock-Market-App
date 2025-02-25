import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard'; // ✅ Correct import
import { AuthService } from '../services/Auth/auth.service'; // ✅ Inject AuthService
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService, Router], // ✅ Provide dependencies
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for logged-in user', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(true); // ✅ Mock login state
    expect(guard.canActivate()).toBe(true);
  });

  it('should redirect to login if not authenticated', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate'); // ✅ Spy on navigation
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
