import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AssetService } from './shared/asset.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    AssetListComponent,
    EditAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
