import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import SignUpComponent from './pages/auth/sign-up/sign-up.component';
import LogInComponent from './pages/auth/log-in/log-in.component';

import { authGuard, publicGuard } from './core/guards';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/landing/landing.component'),
  },
  {
    path: 'auth',
    // canActivate: [publicGuard],
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/auth/sign-up/sign-up.component'),
      },
      {
        path: 'log-in',
        loadComponent: () => import('./pages/auth/log-in/log-in.component'),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/home/home.component'),
  },
];
