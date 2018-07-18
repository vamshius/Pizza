import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, } from '@angular/router'
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { SanComponent } from './san/san.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { VegComponent } from './veg/veg.component';
import { CartComponent } from './cart/cart.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CheeseComponent } from './cheese/cheese.component';
import { PepperoniComponent } from './pepperoni/pepperoni.component';



const appRoutes: Routes= [

  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent}, 
  {path:"location", component:LocationComponent},
  {path:"newyork", component:NewyorkComponent},
  {path:"san", component:SanComponent},
  {path:"chicago", component:ChicagoComponent},
  {path:"veg", component:VegComponent},
  {path:"cheese", component:CheeseComponent},
  {path:"pepperoni", component:PepperoniComponent},
  {path:"cart", component:CartComponent},
  {path:"thanks", component:ThanksComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", component:PagenotfoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LocationComponent,
    PagenotfoundComponent,
    NewyorkComponent,
    SanComponent,
    ChicagoComponent,
    VegComponent,
    CartComponent,
    ThanksComponent,
    CheeseComponent,
    PepperoniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
