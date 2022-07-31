import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {Account} from "../model/account.model";
import {Profile} from "../model/profile.model";
import {Transaction} from "../model/transaction.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  savingAccount:Account
  currencyAccount:Account
  accounts:Account[]
  profile:Profile
  transactions:Transaction[]
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.get().subscribe(profile => {
      console.log(profile)
      this.profile = profile
      this.accounts = profile.accounts
      console.log(this.accounts)
      this.transactions = profile.transactions
      this.savingAccount = this.accounts.filter(account => account.type === "savings")[0]
      this.currencyAccount = this.accounts.filter(account => account.type === "currency")[0]
    })
  }

}
