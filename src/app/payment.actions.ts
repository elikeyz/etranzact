import { createAction, props } from '@ngrx/store';
import { PaymentDetails } from './payment-details.model';

export const setPaymentDetails = createAction('[Payment Page] Set Payment Details', props<{ paymentDetails: PaymentDetails }>());
