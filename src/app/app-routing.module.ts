import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'sales',component:SalesComponent},
  {path:'login',component:LoginComponent},
  {path:'greet',component:GreetComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'customers', 
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', 
  loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
