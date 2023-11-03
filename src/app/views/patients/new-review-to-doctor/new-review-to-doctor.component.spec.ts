import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReviewToDoctorComponent } from './new-review-to-doctor.component';

describe('NewReviewToDoctorComponent', () => {
  let component: NewReviewToDoctorComponent;
  let fixture: ComponentFixture<NewReviewToDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReviewToDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReviewToDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
