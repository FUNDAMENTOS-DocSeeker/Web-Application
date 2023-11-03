import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicalHistoryComponent } from './new-medical-history.component';

describe('NewMedicalHistoryComponent', () => {
  let component: NewMedicalHistoryComponent;
  let fixture: ComponentFixture<NewMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicalHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
