import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.scss'],
  providers: [MessageService],
})
export class AddStuffComponent implements OnInit {
  entity: Stuff = {};
  constructor(
    private dbService: NgxIndexedDBService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  doSave() {
    if (
      this.entity.description &&
      this.entity.inventory &&
      this.entity.stuffName
    ) {
      this.dbService.add('stuff', {
        stuffName: this.entity.stuffName,
        inventory: this.entity.inventory,
        description: this.entity.description,
      });
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: 'با موفقیت ذخیره شد !',
      });
    } else if (!this.entity.stuffName) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'عنوان کالا ضروری است !',
      });
    } else if (!this.entity.inventory) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'موجودی ضروری است !',
      });
    } else if (!this.entity.description) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'توضیحات ضروری است !',
      });
    }
  }
}
export interface Stuff {
  stuffName?: string;
  inventory?: number;
  description?: string;
}
