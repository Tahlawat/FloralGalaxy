import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlowerComponent } from './flower/flower.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import{HttpClientModule}from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NavbarComponent,
    FlowerComponent,
    AboutComponent,
    ListComponent,
         FooterComponent,
         ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   ReactiveFormsModule, FormsModule,  NgImageSliderModule,
    HttpClientModule,
 
    


  ],
  providers: [Demo1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
