import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDoctorsDetailsComponent } from './news-doctors-details.component';

describe('NewsDoctorsDetailsComponent', () => {
  let component: NewsDoctorsDetailsComponent;
  let fixture: ComponentFixture<NewsDoctorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDoctorsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDoctorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
