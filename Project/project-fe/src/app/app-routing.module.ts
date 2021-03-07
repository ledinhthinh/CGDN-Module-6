import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  {path:'customer',component:CustomerComponent},
  {path:'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
