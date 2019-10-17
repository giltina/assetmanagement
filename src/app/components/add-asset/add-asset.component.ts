import { Component, OnInit, NgZone } from '@angular/core';
import { AssetService } from '../../shared/asset.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  assetForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public assetService: AssetService
  ) { }

  ngOnInit() {
  this.addAsset();
  }

  addAsset() {
    this.assetForm = this.fb.group({
      asset_name: [''],
      asset_brand: [''],
      asset_supplier: [''],
      asset_warranty: [''],
      asset_purchase: [''],
    });
  }

  submitForm() {
    this.assetService.CreateBug(this.assetForm.value).subscribe(res => {
      console.log('Asset added!');
      this.ngZone.run(() => this.router.navigateByUrl('/assets'));
    });
  }

}


