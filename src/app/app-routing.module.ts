import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { StoryDetailComponent } from './pages/story-detail/story-detail.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  {path: '', component: IndexComponent, title: 'Football Stories'},
  {path: 'story/:id', component: StoryDetailComponent},
  {path: 'categories/:category', component: StoriesComponent},
  {path: '**', pathMatch: 'full', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
