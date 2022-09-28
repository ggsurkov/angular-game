import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneHexComponent } from './zone-hex.component';

describe('ZoneHexComponent', () => {
  let component: ZoneHexComponent;
  let fixture: ComponentFixture<ZoneHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
