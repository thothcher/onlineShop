import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.everrest.educata.dev/shop'

  getData(): Observable<Resp> {
    return this.http.get<Resp>(`${this.url}/products/all`)
  }


  addToCartServ(id: string) {
    const token = localStorage.getItem('authToken'); // Retrieve token from storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Set authorization header
      'Content-Type': 'application/json'
    });
    return this.http.post<string>(
      `${this.url}/cart/product`,
      { id, quantity: 1 },
      { headers } // Pass headers with request
    ).subscribe(
      response => {
        console.log('Product added to cart:', response);
      },
      error => {
        console.error('Error adding product to cart:', error);
        console.warn(token)
      }
    );
  }
}

export interface Resp {

  limit: number,
  page: number,
  products: Product[],
  skip: number,
  total: number

}
