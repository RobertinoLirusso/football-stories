import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryDetailComponent } from './pages/story-detail/story-detail.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StoriesComponent } from './pages/stories/stories.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    NotfoundComponent,
    FooterComponent,
    StoryDetailComponent,
    StoriesComponent,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
