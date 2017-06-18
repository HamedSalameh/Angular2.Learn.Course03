import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="nav">
      <a *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact : item.exact }">
        {{ item.name }}
      </a>
      <router-outlet></router-outlet>
      
    </div>
  </div>
  `
})
export class AppComponent {

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/Oops',
      name: '404',
      exact: false
    }
  ]

}