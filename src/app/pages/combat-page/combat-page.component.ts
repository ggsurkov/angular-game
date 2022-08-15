import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat-page',
  templateUrl: './combat-page.component.html',
  styleUrls: ['./combat-page.component.scss']
})
export class CombatPageComponent implements OnInit {

  public imgUrls = [
    '../assets/avatars/archer.png',
    '../assets/avatars/warrior.png',
    '../assets/avatars/sorcery.jpg',
    '../assets/avatars/enemy01.jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
