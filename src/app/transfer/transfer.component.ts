import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountTransferService} from "../services/account-transfer.service";
import {Message} from "../model/message.model";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  message:string
  error:boolean = false
  sourceAccount = localStorage.getItem("account")
  transferForm:FormGroup
  submitted = false;
  constructor(private accountTransferService:AccountTransferService) { }

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      sourceAccount:new FormControl(this.sourceAccount,Validators.required),
      destinationAccount: new FormControl(null,Validators.required),
      amount:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    this.submitted = true
    this.accountTransferService.transfer(this.transferForm.value.sourceAccount,this.transferForm.value.destinationAccount,this.transferForm.value.amount,this.transferForm.value.description).subscribe(data => {
        this.message = data.message

    })
  }

}
