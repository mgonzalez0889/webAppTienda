import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductsService} from '../shared/services/products.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup =new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  constructor(private service: ProductsService,
              private route: Router,
              private snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  submit( ) {
    if(this.form.valid) {
      const product = this.form.value; // Product
      console.log( 'Going to save', product );
      this.service.addProduct(product)
        .subscribe( result => {
          console.log('The product has bee added', result);
          this.route.navigate(['']);
          // mensaje de confirmacion
          this.snackBar.open('Product has been added', 'Close' ,{
            duration: 4000 // milisegundos
          });
        });
    }else {
      console.error(' Form is Invalid');
    }
  }

  cancel() {
    this.route.navigate(['']);
  }



}
