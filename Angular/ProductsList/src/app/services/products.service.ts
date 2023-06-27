import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Product } from '../product';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/products`

  constructor(private api: HttpClient) { }

  public getProducts(): Observable<{products: Product[]}> {
    return this.api.get<{products: Product[]}>(`${this.apiUrl}`);
  }
}

