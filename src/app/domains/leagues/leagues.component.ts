import { Component, OnInit } from '@angular/core';
import { League } from '../../shell/models/league.model';
import { LeagueCardComponent } from './league-card/league-card.component';
import { Router } from '@angular/router';
import { LeagueService } from '../../shell/services/league-service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-leagues',
  imports: [LeagueCardComponent],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss',
  standalone: true,
})
export class LeaguesComponent implements OnInit{
  

  constructor(private router: Router,
    private leagueService: LeagueService) {}

    //TO DO: fetch list of leagues from the server and store it in the leagues variable
    ngOnInit(): void {

      this.leagueService.leagueList().subscribe((data) =>{
        console.log(data);
      });
      
    }

  // leagues: League[] = [
  //   {
  //     id: 1,
  //     name: 'Premier League',
  //     logoUrl: 'assets/logos/epl.png',
  //     startDate: '01.01.2025.',
  //     endDate: '27.05.2025.',
  //   },
  //   {
  //     id: 2,
  //     name: 'La Liga',
  //     logoUrl: 'assets/logos/laliga.png',
  //     startDate: '02.02.2025.',
  //     endDate: '12.01.2025.',
  //   },
  // ];

  goToLeague(id: number) {
    this.router.navigate(['/league', id]);
  }
}
