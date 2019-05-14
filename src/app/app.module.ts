import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuanLiSanPhamModule } from './quan-li-san-pham/quan-li-san-pham.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuanLiSanPhamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
