import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrl: './story-detail.component.css'
})
export class StoryDetailComponent implements OnInit {

  story: any;
  imageLoaded: boolean = false;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
     this.loadStory(); 
  }

  private loadStory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.storyService.getStory(id).subscribe(story => {
        this.story = story;
      });
    }
  }
}
