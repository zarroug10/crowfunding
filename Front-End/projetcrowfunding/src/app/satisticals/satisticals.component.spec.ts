import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisticalsComponent } from './satisticals.component';

describe('SatisticalsComponent', () => {
  let component: SatisticalsComponent;
  let fixture: ComponentFixture<SatisticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
