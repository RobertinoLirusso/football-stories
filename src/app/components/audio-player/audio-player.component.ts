import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css'
})
export class AudioPlayerComponent {

  constructor(public audioService: AudioService) {}

  togglePlayPause() {
    this.audioService.togglePlayPause();
  }

}
