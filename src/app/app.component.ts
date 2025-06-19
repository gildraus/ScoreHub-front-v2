import { Component } from '@angular/core';
import { MainComponent } from './shell/ui-components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ScoreHub-front';
}
