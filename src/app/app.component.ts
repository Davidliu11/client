import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    firstLoad = false;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.firstLoad = !(!!localStorage.getItem('lastLoginDate'));

        if (!this.firstLoad) {
            this.router.navigate(['dashboard']);
        } else {
            this.router.navigate(['welcome']);
        }
    }
}
