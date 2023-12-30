import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateProjectsComponent } from './validate-project.component';

describe('ValidateProjectComponent', () => {
  let component: ValidateProjectsComponent;
  let fixture: ComponentFixture<ValidateProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
