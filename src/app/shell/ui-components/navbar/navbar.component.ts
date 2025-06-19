import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

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
    }
  ];
  

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
