import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GameStatusService, IGameStatus} from './global-services/game-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public gameStatus$: Observable<IGameStatus>
  constructor(private router: Router, private gameStatusService: GameStatusService) {}

  ngOnInit() {
    this.gameStatus$ = this.gameStatusService.gameStatus$;
  }

  public enterCombat() {
    this.gameStatusService.setGameStatus$({isCombat: true});
  }

  public menu() {
    this.gameStatusService.setGameStatus$({isCombat: false});
  }
}
