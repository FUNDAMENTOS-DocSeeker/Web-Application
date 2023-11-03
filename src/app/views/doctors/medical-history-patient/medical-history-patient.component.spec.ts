import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryPatientComponent } from './medical-history-patient.component';

describe('MedicalHistoryPatientComponent', () => {
  let component: MedicalHistoryPatientComponent;
  let fixture: ComponentFixture<MedicalHistoryPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalHistoryPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalHistoryPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
