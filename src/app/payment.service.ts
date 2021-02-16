import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentDetails } from './payment-details.model';
import { setPaymentDetails } from './payment.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment$: Observable<PaymentDetails>;
  details!: PaymentDetails;

  constructor(private store: Store<{ payment: PaymentDetails }>) {
    this.payment$ = store.select('payment');
  }

  pay(details: PaymentDetails): void {
    this.store.dispatch(setPaymentDetails({ paymentDetails: details }));
  }
}
