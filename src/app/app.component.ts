import { Component } from '@angular/core';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(public audioService: AudioService) {}

  togglePlayPause() {
    this.audioService.togglePlayPause();
  }
}
