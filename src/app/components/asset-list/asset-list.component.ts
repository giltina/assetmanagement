import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../shared/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  AssetsList: any = [];

  constructor( public assetService: AssetService) { }

  ngOnInit() {
    this.loadAssets();
  }

  loadAssets() {
    return this.assetService.GetAssets().subscribe((data: {}) => {
      this.AssetsList = data;
    });
  }

}
