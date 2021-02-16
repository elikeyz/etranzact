import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  pay(details: PaymentDetails): void {
    console.log(details);
  }
}
