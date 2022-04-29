import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ModalsComponent } from './modals/modals.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CustomersSayComponent } from './customers-say/customers-say.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

const config = {
  apiKey: "AIzaSyDYfIolSWky_mSTDqu5ukJ5pApqksK_Ri0",
  authDomain: "email-handler-e3a22.firebaseapp.com",
  projectId: "email-handler-e3a22",
  storageBucket: "email-handler-e3a22.appspot.com",
  messagingSenderId: "540805341175",
  appId: "1:540805341175:web:d929602239ff84a10858f2",
  measurementId: "G-MP9LNCRW5F"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ModalsComponent,
    ServicesComponent,
    PriceComponent,
    BestSellerComponent,
    CustomersSayComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    AngularFireModule.initializeApp(config),
    AngularFireFunctionsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
