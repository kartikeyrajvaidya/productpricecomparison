import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdescComponent } from './productlist/productdesc/productdesc.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdescComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
