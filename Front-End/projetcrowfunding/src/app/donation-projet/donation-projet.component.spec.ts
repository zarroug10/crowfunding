import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationProjetComponent } from './donation-projet.component';

describe('DonationProjetComponent', () => {
  let component: DonationProjetComponent;
  let fixture: ComponentFixture<DonationProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
