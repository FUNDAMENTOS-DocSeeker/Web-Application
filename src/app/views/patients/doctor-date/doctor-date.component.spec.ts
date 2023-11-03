import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDateComponent } from './doctor-date.component';

describe('DoctorDateComponent', () => {
  let component: DoctorDateComponent;
  let fixture: ComponentFixture<DoctorDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
