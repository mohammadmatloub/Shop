import { Provider } from '@angular/core';
import { AddStuffComponent } from './add-stuff/add-stuff.component';
import { LayoutComponent } from './layout/layout.component';
import { StuffListComponent } from './stuff-list/stuff-list.component';

export const COMPONENTS: Provider[] = [
  LayoutComponent,
  AddStuffComponent,
  StuffListComponent,
];
