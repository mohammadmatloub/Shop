import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  display = true;

  items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.items = [
      { label: 'تنظیمات کاربری', items: [{ label: 'ایجاد کالا' }] },
      { label: 'تنظیمات عمومی', items: [{ label: 'ایجاد کالا' }] },
      {
        label: 'مدیریت کالا',
        items: [
          { label: 'ایجاد کالا', routerLink: 'add-stuff' },
          { label: 'فهرست کالا', routerLink: 'stuff-list' },
        ],
      },
    ];
  }
}
interface MenuItem {
  label?: string;
  icon?: string;
  items?: MenuItem[];
  separator?: boolean;
  routerLink?: any;
}
