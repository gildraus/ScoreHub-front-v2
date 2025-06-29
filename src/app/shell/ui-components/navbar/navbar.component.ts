import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { url } from 'inspector';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) { }
  public authorized = false;

  //TO DO: make fetch for all leagues from db
  leagues = [
    {
      title: 'NBA',
      icon: ''
    },
    {
      title: 'Euroleague',
      icon: ''
    },
    {
      title: 'Champions League',
      icon: ''
    },
    {
      title: 'Eurocup',
      icon: ''
    },
    {
      title: 'Turnir Tabanovac',
      icon: '',
      url: '/league/99'
    }
  ];


  goToProfile() {
    this.router.navigate(['/profile']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToLeague(url: string = '') {
    console.log('Navigating to league with URL:', url);
    this.router.navigate([url]);
  }
}
