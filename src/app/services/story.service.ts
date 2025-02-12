import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private jsonUrl = '/assets/data/stories.json';

  constructor(private http: HttpClient) { }

  getStories(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl); 
  }

  getStory(id: number): Observable<any> {
    return new Observable(observer => {
      this.getStories().subscribe(stories => {
        const story = stories.find(h => h.id === id);
        observer.next(story);
        observer.complete();
      });
    });
  }

  getStoriesByCategory(category: 'matches' | 'players' | 'teams' | 'stadiums'): Observable<any[]> {
    const lowerCaseCategory = category.toLowerCase() as 'matches' | 'players' | 'teams' | 'stadiums';
    return this.getStories().pipe(
      map(stories => stories.filter(story => story.category.toLowerCase() === lowerCaseCategory))
    );
  }

  
}
