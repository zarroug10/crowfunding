import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCreatComponent } from './navbar-creat.component';

describe('NavbarCreatComponent', () => {
  let component: NavbarCreatComponent;
  let fixture: ComponentFixture<NavbarCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
