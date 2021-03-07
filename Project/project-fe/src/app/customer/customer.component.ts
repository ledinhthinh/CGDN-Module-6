import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {CustomerService} from '../customer.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public customers;
  public customerId =0;
  public customerName = '';

  constructor(public customerService: CustomerService) {}
  ngOnInit(): void {
    
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data.content;
    });
  }
  deleteCustomer(id) {
    this.customerService
      .deleteCustomer(id)
      .subscribe((data) => {
        this.ngOnInit;
      });
     
  }

  delete(id, name) {
    this.customerId = id;
    this.customerName = name;
  }

}
