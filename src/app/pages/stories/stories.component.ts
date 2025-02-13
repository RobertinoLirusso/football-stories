import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit {

  stories: any[] = [];
  category: 'matches' | 'players' | 'teams' | 'stadiums' | null = null; // Asegurar que el tipo es válido

  categoryDescriptions: { [key: string]: string } = {
    matches: 'Relive the most exciting and memorable matches.',
    players: 'Discover the history and careers of legendary players.',
    teams: 'Explore the most iconic teams and their football legacy.',
    stadiums: 'Learn about the most famous stadiums and their history.',
  };

  constructor(private route: ActivatedRoute, private storyService: StoryService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryParam = params.get('category');
      
      // Verificamos si el valor es uno de los permitidos
      if (categoryParam && ['matches', 'players', 'teams', 'stadiums'].includes(categoryParam)) {
        this.category = categoryParam as 'matches' | 'players' | 'teams' | 'stadiums';
        this.storyService.getStoriesByCategory(this.category).subscribe(stories => {
          this.stories = stories;
        });
      } else {
        this.category = null; // Evitamos pasar un valor inválido
        this.stories = []; // Limpiamos la lista en caso de error
      }
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

  getCategoryDescription(): string {
    return this.category ? this.categoryDescriptions[this.category] || 'Explora historias fascinantes.' : '';
  }

}
