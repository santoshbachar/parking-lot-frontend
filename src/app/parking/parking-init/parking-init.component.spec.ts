import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingInitComponent } from './parking-init.component';

describe('ParkingInitComponent', () => {
  let component: ParkingInitComponent;
  let fixture: ComponentFixture<ParkingInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
