import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpartnerComponent } from './contactpartner.component';

describe('ContactpartnerComponent', () => {
  let component: ContactpartnerComponent;
  let fixture: ComponentFixture<ContactpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
