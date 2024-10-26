import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule'ü dahil et

import { AppComponent } from './app.component';
import { GorevEkleComponent } from './gorev-ekle/gorev-ekle.component';
import { GorevListesiComponent } from './gorev-listesi/gorev-listesi.component';

@NgModule({
  declarations: [
    AppComponent,
    GorevEkleComponent,
    GorevListesiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // FormsModule'ü buraya ekle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
