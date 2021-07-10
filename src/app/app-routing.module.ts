import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddStuffComponent } from './panel/add-stuff/add-stuff.component';
import { LayoutComponent } from './panel/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./panel/panel.module').then((t) => t.PanelModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then((t) => t.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
