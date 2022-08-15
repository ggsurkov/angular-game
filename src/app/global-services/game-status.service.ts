import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IGameStatus {
  isCombat: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  private _gameStatus$: BehaviorSubject<IGameStatus> = new BehaviorSubject(null);

  get gameStatus$(): Observable<IGameStatus> {
    return this._gameStatus$.asObservable();
  }

  public setGameStatus$(gameStatus: IGameStatus) {
    this._gameStatus$.next(gameStatus);
  }
  constructor() { }
}
