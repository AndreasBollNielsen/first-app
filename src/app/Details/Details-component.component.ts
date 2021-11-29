import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Details',
  templateUrl: './Details-component.component.html',
  styleUrls: ['./Details-component.component.css'],
})
export class DetailsComponentComponent implements OnInit {
  showDetails = false;
  logIncrement = 0;
  log: Date[] = [];

  constructor() {}

  ngOnInit() {}

  onToggleDetails() {
    this.logIncrement += 1;
    this.showDetails = !this.showDetails;
    // this.log.push(this.logIncrement);
    this.log.push(new Date());
  }

  GetColor(index: any) {
    if (index >= 4) {
      return 'blue';
    } else {
      return null;
    }
  }
}
