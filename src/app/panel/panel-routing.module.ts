import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStuffComponent } from './add-stuff/add-stuff.component';
import { LayoutComponent } from './layout/layout.component';
import { StuffListComponent } from './stuff-list/stuff-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: 'add-stuff',
        component: AddStuffComponent,
      },
      {
        path: 'stuff-list',
        component: StuffListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
