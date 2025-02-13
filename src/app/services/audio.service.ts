import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private playlist: { src: string, name: string }[] = [
    { src: 'assets/audio/song1.mp3', name: 'Hala Madrid y nada más' },
    { src: 'assets/audio/song2.mp3', name: 'Chelsea chants' },
  ];
  private currentTrackIndex = 0;
  isPlaying = false;
  isPlayerVisible = true;  // Controla la visibilidad del reproductor


  constructor() {
    // Se crea el audio solo si estamos en el navegador
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
    this.isPlayerVisible = !this.isPlayerVisible;  // Alternar visibilidad
  }
}
