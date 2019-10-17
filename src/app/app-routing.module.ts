import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';


const routes: Routes = [

  {
    path: 'assets',
    component: AssetListComponent
  },
  {
    path: 'create_asset',
    component: AddAssetComponent
  },
  {
    path: 'edit_asset',
    component: EditAssetComponent
  },
  { path: '',
    redirectTo: '/assets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
