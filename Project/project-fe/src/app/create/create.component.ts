import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public formAddNewCustomer: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public customerService: CustomerService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formAddNewCustomer = this.formBuilder.group({
      id: [''],
      name: [''],

      gender: [''],

      address: [''],
    });
  }

  addNewCustomer() {
    if (this.formAddNewCustomer.valid) {
      this.customerService
        .addNewCustomer(this.formAddNewCustomer.value)
        .subscribe((data) => {
          this.router.navigateByUrl('');
        });
    }
  }
  returnListCustomer() {
    this.router.navigateByUrl('customer');
  }

  checkDateOfBirth(absControl: AbstractControl): any {
    const value = absControl.value; // 2021-02-24
    const year = Number(value.substr(0, 4));

    return new Date().getFullYear() - year >= 18 ? null : { check: true };
  }
}
