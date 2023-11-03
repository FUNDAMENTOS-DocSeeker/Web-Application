import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPaymentComponent } from './go-payment.component';

describe('GoPaymentComponent', () => {
  let component: GoPaymentComponent;
  let fixture: ComponentFixture<GoPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
