import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInDoctorComponent } from './log-in-doctor.component';

describe('LogInDoctorComponent', () => {
  let component: LogInDoctorComponent;
  let fixture: ComponentFixture<LogInDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
