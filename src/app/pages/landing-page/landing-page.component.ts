import { Component, OnInit } from '@angular/core';
import {GameStatusService} from '../../global-services/game-status.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  template: `
    <header>
      <div class="logo">Logo</div>
      <div class="enter">
        <span>Registration</span>
        <span>Sign in</span>
      </div>
    </header>
    <div class="action-btn">
      <button (click)="enterCombat()">Launch game</button>
    </div>
    <footer>
      copyright 2022
    </footer>
  `,
  styleUrls: ['landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private gameStatusService: GameStatusService, private router: Router) { }

  ngOnInit(): void {}

  public enterCombat() {
    this.gameStatusService.setGameStatus$({isCombat: true});
    this.router.navigate(['/combat-page']).then();
  }

  public menu() {
    this.gameStatusService.setGameStatus$({isCombat: false});
  }

}
