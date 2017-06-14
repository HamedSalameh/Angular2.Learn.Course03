import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-viewer></passenger-viewer>
      
    </div>
  `
})
export class AppComponent{}