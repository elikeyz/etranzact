import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private payment: PaymentService) { }

  paymentDetails = new FormGroup({
    cardNumber: new FormControl(''),
    cardHolder: new FormControl(''),
    expDate: new FormControl(''),
    cvv: new FormControl(''),
    amount: new FormControl('')
  });


  ngOnInit(): void {
  }

  handleExpChange(): void {
    console.log(this.paymentDetails.value.expDate);
    if (this.paymentDetails.value.expDate.length > 2 && !this.paymentDetails.value.expDate.includes('/')) {
      const newValue = this.paymentDetails.value.expDate.slice(0, 2) + '/' + this.paymentDetails.value.expDate.slice(2);
      this.paymentDetails.patchValue({
        expDate: newValue
      });
    }
  }

  submitDetails(): void {
    this.payment.pay(this.paymentDetails.value);
  }

}
