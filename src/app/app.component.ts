import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule, MatToolbarModule } from '@angular/material/'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  isInGame(): boolean {
    return this.router.url.includes('dashboard');
  }
}