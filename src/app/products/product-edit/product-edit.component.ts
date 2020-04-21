import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../shared/services/products.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl('')
  });

  id: string;
  constructor(private route: ActivatedRoute,
              private service: ProductsService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // get /products/:id
    this.service.get(this.id)
      .subscribe(product => {
        console.log('product', product);
        // this.form.setValue(product);
        this.form.patchValue(product); // funcion que permite aceptar objetos o que no hagan match en el objeto presentes solo trae lo real
      });
  }

  submit(  ) {
    if(this.form.valid) {
      const product = this.form.value;
      product.id = this.id;
      console.log('Going to update', product);
      this.service.update(product)
        .subscribe(result => {
          console.log('Update finished', result);
          this.router.navigate(['/products']);
            this.snackBar.open('Product has been update', 'Close',{
            duration: 3000
          });

        });
    }

  }

  cancel( ) {
    this.router.navigate(['/products']);
  }

}
