import {Account} from "./account.model";
import {Transaction} from "./transaction.model";

export class Profile {
  id:number;

 firstname:string;

 lastname:string;

  mobile:string;

  address:string;

  email:string;

  username:string;

  password:string;

  accounts:Account[]

  transactions:Transaction[]
}
