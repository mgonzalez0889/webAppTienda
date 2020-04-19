import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';

const PRODUCTS_URL = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient ) { }

  getAll(): Observable<Product[]> {
   return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`);
  }
}