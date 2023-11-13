import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteNavbarComponent } from './complete-navbar.component';

describe('CompleteNavbarComponent', () => {
  let component: CompleteNavbarComponent;
  let fixture: ComponentFixture<CompleteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
