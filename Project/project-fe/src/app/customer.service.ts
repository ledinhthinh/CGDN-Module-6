import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API = 'http://localhost:8080/customer'
  API_URL: string;
  constructor(public http: HttpClient) {}

  getAllCustomers():Observable<any>{
    return this.http.get(this.API);
  }
  addNewCustomer(customer):Observable<any>{
    return this.http.post(this.API+'/create',customer);
  }
  getCustomerById(id):Observable<any>{
    return this.http.get(this.API+'/'+id);
  }
  deleteCustomer(id):Observable<any>{
    return this.http.delete(this.API+'/delete/'+id)
  }
}
