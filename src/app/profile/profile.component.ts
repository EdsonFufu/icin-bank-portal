import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {Profile} from "../model/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Profile
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.get().subscribe(profile => {
      this.profile = profile
    })
  }
}
