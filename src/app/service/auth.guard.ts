import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  console.log('Auth Guard triggered for route:', state.url);

  // Check if the user is authenticated
  if (userService.isAuthencticated()) {
    console.log('User is authenticated');
    return true;
  }

  // Handle unauthenticated access
  console.warn('User not authenticated. Redirecting to login.');
  alert('Please login to access this page.');
  router.navigate(['login']);
  return false;
};
