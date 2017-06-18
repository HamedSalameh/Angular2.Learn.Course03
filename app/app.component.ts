import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="nav">
      <a 
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact : true }">
        Home
      </a>
      <a 
        routerLink="/oops"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact : true }">
        404
      </a>
      <router-outlet></router-outlet>
      
    </div>
  </div>
  `
})
export class AppComponent{}