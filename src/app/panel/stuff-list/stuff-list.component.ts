import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.scss'],
})
export class StuffListComponent implements OnInit {
  cols: any[] = [];
  data: any;

  constructor(private dbService: NgxIndexedDBService) {}

  ngOnInit() {
    this.dbService.getAll('stuff').subscribe((stuff) => {
      console.log(stuff);
      this.data = stuff;
    });
    this.cols = [
      { field: 'stuffName', header: 'عنوان کالا' },
      { field: 'inventory', header: 'موجودی انبار' },
      { field: 'description', header: 'توضیحات' },
      { field: 'stuffPic', header: 'عکس کالا' },
    ];
  }
}
export interface Car {
  stuffName?: string;
  inventory?: number;
  description?: string;
}
