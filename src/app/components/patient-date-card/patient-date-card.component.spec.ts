import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDateCardComponent } from './patient-date-card.component';

describe('PatientDateCardComponent', () => {
  let component: PatientDateCardComponent;
  let fixture: ComponentFixture<PatientDateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
