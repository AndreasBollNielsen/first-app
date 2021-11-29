import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';
  enableReset = true;

  constructor() { }

  ngOnInit(): void {
  }

  onUserNameUpdate(event: Event) {

    // this.userName = (<HTMLInputElement>event.target).value;
    // if (this.userName != '') {
    //   this.enableReset = false;
    // }
    // else {
    //   this.enableReset = true;
    // }


  }

  onResetuserName() {
    this.userName = '';
    this.enableReset = true;
  }
}
