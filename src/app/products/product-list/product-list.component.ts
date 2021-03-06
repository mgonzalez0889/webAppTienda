import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import {ConfirmDialogModel} from '../../shared/models/confirm-dialog-model';

@Component({
  selector: 'ed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private service: ProductsService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadproduct();
  }

  deleteProduct(product: Product  ) {

     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       maxWidth: '600px',
       data: <ConfirmDialogModel> {
         title: 'Delete Product',
         message: 'Are you sure to delete this product?'
       }
     });
     // Si en el modal la persona presiona YES este retornara un true y se activa el metodo sendDelete
     dialogRef.afterClosed()
       .subscribe( result => {
        if(result) {
          this.sendDeleteRequest(product);
        }
       });
  }

  private loadproduct() {

    this.service.getAll()
      .subscribe(data => {
        console.log('data', data);
        this.products = data;
      });
  }

  private sendDeleteRequest(product: Product) {

    this.service.delete(product.id)
      .subscribe(response => {
        console.log('Product has been deleted', response);
        this.loadproduct();
        this.snackbar.open('Product has been deleted', 'Close', {
          duration: 3000
        });
      });
  }

}
