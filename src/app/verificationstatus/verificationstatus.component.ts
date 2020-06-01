import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificationstatus',
  templateUrl: './verificationstatus.component.html',
  styleUrls: ['./verificationstatus.component.css']
})
export class VerificationstatusComponent implements OnInit {
  profileId;

  constructor() { }


  ngOnInit(): void {
    this.profileId = localStorage.getItem('profileId')
    console.log("profileId", this.profileId);
  }

}
