import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  categories = ['matches', 'players', 'teams', 'stadiums'];
  
  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/categories', category]);
  }
}
