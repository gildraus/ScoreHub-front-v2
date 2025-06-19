import { Component, Input } from '@angular/core';
import { League } from '../../../shell/models/league.model';

@Component({
  selector: 'app-league-card',
  imports: [],
  templateUrl: './league-card.component.html',
  styleUrl: './league-card.component.scss',
})
export class LeagueCardComponent {
  @Input() league!: League;
}
