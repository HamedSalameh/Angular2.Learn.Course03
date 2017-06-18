import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template:
    `
    <div>
        Not Found 404!
        <a routerLink="/">Home</a>
    </div>
    `
})
export class NotFoundComponent {}