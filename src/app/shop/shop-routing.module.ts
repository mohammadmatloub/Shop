import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ShopLayoutComponent,

    children: [
      // {
      //   path: 'add-stuff',
      //   component: AddStuffComponent,
      // },
      // {
      //   path: 'stuff-list',
      //   component: StuffListComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
