import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { LeaguesComponent } from './domains/leagues/leagues.component';
import { ProfileComponent } from './domains/profile/profile.component';
import { NotFound } from '@angular/core/primitives/di';
import { NotFoundComponent } from './shell';
import { LeaguePreviewComponent } from './domains/leagues/league-preview/league-preview.component';
import { LoginFormComponent } from './domains/auth/login-form/login-form.component';
import { RegistrationFormComponent } from './domains/auth/registration-form/registration-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'league/:id',
    component: LeaguePreviewComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
