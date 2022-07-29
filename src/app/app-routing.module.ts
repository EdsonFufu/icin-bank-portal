import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {TransferComponent} from "./transfer/transfer.component";
import {CheckBookComponent} from "./check-book/check-book.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TransactionComponent} from "./transaction/transaction.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard',component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'check-book', component: CheckBookComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
