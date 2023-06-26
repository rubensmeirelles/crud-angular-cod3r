import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Products } from '../products';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/products`

  constructor(private api: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.api.get<Products[]>(this.apiUrl);
  }
}
