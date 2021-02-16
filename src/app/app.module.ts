import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PaymentComponent } from './payment/payment.component';
import { paymentReducer } from './payment.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ payment: paymentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
