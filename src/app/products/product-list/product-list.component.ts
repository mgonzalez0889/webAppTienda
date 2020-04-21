import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private service: ProductsService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadproduct();
  }

  deleteProduct(product: Product  ) {
     this.service.delete(product.id)
       .subscribe(response => {
         console.log('Product has been deleted', response);
          this.loadproduct();
          this.snackbar.open('Product has been deleted', 'Close', {
            duration: 3000
          });
       });
  }

  private loadproduct() {
    this.service.getAll()
      .subscribe(data => {
        console.log('data', data);
        this.products = data;
      });
  }

}
