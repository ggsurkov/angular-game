import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <p (click)="goHome()">404 not found. <span>Go to home page</span></p>
  `,
  styles: [
    ':host {text-align: center;}',
    'span {color:red; cursor: pointer;}',
  ]
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goHome() {
    this.router.navigate(['/']).then();
  }

}
