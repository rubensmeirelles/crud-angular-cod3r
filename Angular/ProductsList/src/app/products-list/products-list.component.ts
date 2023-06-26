import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  data!: Products[];
  baseApiUrl = environment.baseApiUrl;

  constructor(private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe((response: Products[]) => {
      const product = response.length;
      console.log("response: ",product)
    });
  }
}
