import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public isDarkMode = false;

  //TO DO: refactor this feature
  onToggle(event: Event): void {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    console.log(this.isDarkMode);
    document.body.style.backgroundColor = this.isDarkMode
      ? '#40444b'
      : '#D6FF4A';
  }
}
