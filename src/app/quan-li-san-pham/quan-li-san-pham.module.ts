import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLiSanPhamComponent } from './quan-li-san-pham.component';

@NgModule({
  declarations: [QuanLiSanPhamComponent],
  exports:[QuanLiSanPhamComponent],
  imports: [
    CommonModule
  ]
})
export class QuanLiSanPhamModule { }
