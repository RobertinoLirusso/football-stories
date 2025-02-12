import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  stories: any[] = [];
  loading: any;

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe(data => {
      this.stories = data;
    });
  }

  getBadgeClass(category: string): string {
    switch (category.toLowerCase()) {
      case 'matches': return 'text-bg-primary';  
      case 'players': return 'text-bg-success';  
      case 'teams': return 'text-bg-dark';    
      case 'stadiums': return 'text-bg-info';    
      default: return 'text-bg-secondary';       
    }
  } 

}
