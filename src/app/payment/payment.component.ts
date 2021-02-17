import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private payment: PaymentService) { }

  cardNumber = new FormControl('', [Validators.required]);
  cardHolder = new FormControl('', [Validators.required]);
  expDate = new FormControl('', [Validators.required, this.validateExpDate()]);
  cvv = new FormControl('', [Validators.maxLength(3), Validators.minLength(3)]);
  amount = new FormControl('', [Validators.required, this.validateAmount()]);

  paymentDetails = new FormGroup({
    cardNumber: this.cardNumber,
    cardHolder: this.cardHolder,
    expDate: this.expDate,
    cvv: this.cvv,
    amount: this.amount
  });


  ngOnInit(): void {
  }

  validateExpDate(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(control.value)) {
        return { invalidDate: true };
      }

      const [month, year] = control.value.split('/');
      const date = new Date(Number('20' + year), Number(month) - 1);

      if (date < new Date()) {
        return { pastDate: true };
      }

      return null;
    };
  }

  validateAmount(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (Number(control.value) <= 0) {
        return { invalidAmount: true };
      }

      return null;
    };
  }

  handleExpChange(): void {
    if (this.paymentDetails.value.expDate.length > 2 && !this.paymentDetails.value.expDate.includes('/')) {
      const newValue = this.paymentDetails.value.expDate.slice(0, 2) + '/' + this.paymentDetails.value.expDate.slice(2);
      this.paymentDetails.patchValue({
        expDate: newValue
      });
    }
  }

  submitDetails(): void {
    if (this.paymentDetails.valid) {
      this.payment.pay(this.paymentDetails.value);
    }
  }

}
