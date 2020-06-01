import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Dob;
  constructor(public datepipe: DatePipe) { }

  ngOnInit() {
  };

  setFirstName(event) {
    console.log(event.target.value);
    localStorage.setItem('firstName', event.target.value);
  }

  setLastName(event) {
    console.log(event.target.value);
    localStorage.setItem('lastName', event.target.value);
  }

  setMobileNumber(event) {
    console.log(event.target.value);
    localStorage.setItem('mobileNumber', event.target.value);
  }

  setEmail(event) {
    console.log(event.target.value);
    localStorage.setItem('emailId', event.target.value);
  }

  setPanNumber(event) {
    console.log(event.target.value);
    localStorage.setItem('panNumber', event.target.value);
  }

  setDoB(event) {
    console.log("inside dob function");
    console.log(event.target.value);
    this.Dob = event.target.value;

    const latest_date = this.datepipe.transform(this.Dob, 'yyyy-MM-dd');


    console.log(JSON.stringify(latest_date));
    localStorage.setItem('DoB', latest_date);
    // this.getData(newDate);
  }

}
