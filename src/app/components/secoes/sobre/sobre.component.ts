import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: 'sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  handleDownload(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    button.classList.add('downloading');

    // Remove a classe após a animação terminar
    setTimeout(() => {
      button.classList.remove('downloading');
    }, 1000);
  }
}
