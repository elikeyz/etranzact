import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentDetails } from './payment-details.model';
import { setPaymentDetails } from './payment.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  payment$: Observable<PaymentDetails>;
  cardNumber!: string;
  cardHolder!: string;
  expDate!: string;
  cvv!: string;
  amount!: number;

  constructor(private store: Store<{ payment: PaymentDetails }>) {
    this.payment$ = store.select('payment');
  }

  ngOnInit(): void {
    this.payment$.subscribe(value => {
      this.cardNumber = value.cardNumber;
      this.cardHolder = value.cardHolder;
      this.expDate = value.expDate;
      this.cvv = value.cvv;
      this.amount = value.amount;
    });
  }
}
