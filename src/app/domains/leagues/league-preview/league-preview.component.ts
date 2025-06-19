import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-preview',
  imports: [],
  templateUrl: './league-preview.component.html',
  styleUrl: './league-preview.component.scss',
})
export class LeaguePreviewComponent {
  constructor(private route: ActivatedRoute) {}

  public id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
