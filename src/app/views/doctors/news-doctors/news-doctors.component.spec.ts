import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDoctorsComponent } from './news-doctors.component';

describe('NewsDoctorsComponent', () => {
  let component: NewsDoctorsComponent;
  let fixture: ComponentFixture<NewsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
