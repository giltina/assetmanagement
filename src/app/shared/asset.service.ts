import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asset } from 'model/asset';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  // Base url
  baseurl = 'https://whispering-hollows-34988.herokuapp.com/api/assetsdata';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  CreateBug(data){
    return this.http.post(this.baseurl + '/api/assetsdata', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1)
    );
  }

   // GET
   GetAssets() {
    return this.http.get(this.baseurl + '/api/assetsdata')
    .pipe(
      retry(1)
    );
  }

}
