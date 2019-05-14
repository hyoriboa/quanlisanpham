import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-quan-li-san-pham',
  templateUrl: './quan-li-san-pham.component.html',
  styleUrls: ['./quan-li-san-pham.component.scss']
})
export class QuanLiSanPhamComponent implements OnInit {

  danhSachSanPham:any = [];
  SanPham:any = {};

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('DanhSachSP')){
      this.danhSachSanPham = JSON.parse(localStorage.getItem('DanhSachSP'));
    }
  }

  themSanPham(masp, tensp, giasp){
    this.SanPham = {masp, tensp, giasp};
    this.danhSachSanPham.push(this.SanPham);
    localStorage.setItem('DanhSachSP', JSON.stringify(this.danhSachSanPham));
  }

}
