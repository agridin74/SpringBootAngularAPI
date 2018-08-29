import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { FlowerDetailsComponent } from './flower-details/flower-details.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    FlowerDetailsComponent,
    AddFlowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
