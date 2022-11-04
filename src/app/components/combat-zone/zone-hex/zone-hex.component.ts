import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zone-hex',
  templateUrl: './zone-hex.component.html',
  styleUrls: ['./zone-hex.component.scss']
})
export class ZoneHexComponent implements OnInit {
  @Input() imgUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
