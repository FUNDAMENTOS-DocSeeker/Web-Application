import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-go-payment',
  templateUrl: './go-payment.component.html',
  styleUrls: ['./go-payment.component.css']
})
export class GoPaymentComponent {
  @Input() dateText = 'Date';
  @Input()timeText = 'Hour';
  @Input() doctorName="Doctor Name";
  @Input() payment = 'payment';

  goToPayment(): void {

  }
}
