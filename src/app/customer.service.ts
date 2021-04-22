import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getCustomer() {
    return this.http.get('https://gorest.co.in/public-api/users');
  }

  getCustomerById(id: number) {
    return this.http.get('https://gorest.co.in/public-api/users?id=' + id);
  }

}
