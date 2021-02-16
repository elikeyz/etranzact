import { createReducer, on } from '@ngrx/store';
import { setPaymentDetails } from './payment.actions';
import { PaymentDetails } from './payment-details.model';

export const initialState = {
  cardNumber: '',
  cardHolder: '',
  expDate: '',
  cvv: '',
  amount: 0
};

const PaymentReducer = createReducer(initialState, on(setPaymentDetails, (state, action) => ({
  cardNumber: action.paymentDetails.cardNumber,
  cardHolder: action.paymentDetails.cardHolder,
  expDate: action.paymentDetails.expDate,
  cvv: action.paymentDetails.cvv,
  amount: action.paymentDetails.amount
})));

export const paymentReducer = (state: any, action: any) => PaymentReducer(state, action);

