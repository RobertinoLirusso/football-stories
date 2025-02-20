import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private playlist: { src: string, name: string }[] = [
    { src: 'assets/audio/song1.mp3', name: 'Hala Madrid y Nada Más' },
    { src: 'assets/audio/song2.mp3', name: 'Chelsea Fans Chants' },
    { src: 'assets/audio/song3.mp3', name: "You'll Never Walk Alone'" },
    { src: 'assets/audio/song4.mp3', name: 'Vamos Vamos Vamos La Acade' },
    { src: 'assets/audio/song5.mp3', name: 'Cant del Barça' },
    { src: 'assets/audio/song6.mp3', name: 'UEFA Champions League Anthem' },
    { src: 'assets/audio/song7.mp3', name: 'Iceland Viking Clap' },
    { src: 'assets/audio/song8.mp3', name: 'Man City Chant' },
    { src: 'assets/audio/song9.mp3', name: 'Dynamo Dresden Ultras' },
    { src: 'assets/audio/song10.mp3', name: 'Napoli Ultras' },
    { src: 'assets/audio/song11.mp3', name: 'Oh when the Spurs go marching in' },

  ];
  private currentTrackIndex = 0;
  isPlaying = false;
  isPlayerVisible = false;  // Controla la visibilidad del reproductor


  constructor() {
    if (typeof window !== 'undefined' && window.Audio) {
      this.audio = new Audio();
      this.audio.src = this.playlist[this.currentTrackIndex].src;
      this.audio.load();
      this.audio.addEventListener('ended', () => this.playNext());
    } else {
      // No se muestra mensaje de error en consola
    }
  }

  play() {
    if (this.audio) {
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch(error => console.error('Error playing audio:', error));
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  playNext() {
    if (this.audio) {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
      this.audio.src = this.playlist[this.currentTrackIndex].src;
      this.audio.load();
      this.play(); // Llamamos a play() que ya actualiza `isPlaying`
    }
  }

  togglePlayPause() {
    this.isPlaying ? this.pause() : this.play();
  }

  getCurrentTrackName(): string {
    return this.playlist[this.currentTrackIndex].name;
  }

  togglePlayerVisibility() {
    this.isPlayerVisible = !this.isPlayerVisible;  
  }
}
