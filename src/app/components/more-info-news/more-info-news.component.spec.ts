import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoNewsComponent } from './more-info-news.component';

describe('MoreInfoNewsComponent', () => {
  let component: MoreInfoNewsComponent;
  let fixture: ComponentFixture<MoreInfoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
