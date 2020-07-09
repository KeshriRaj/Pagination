import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  productData;
  getService(): Observable<any> {
    return this.http.get("https://5f049bd18b06d60016ddee1f.mockapi.io/data/");
  }
  show(count): Observable<any> {
    return this.http.get("https://5f049bd18b06d60016ddee1f.mockapi.io/data/?page="+count+"&limit=10");
  }

  }
