import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverIsCreated = false;
  servers = ['TestServer','TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! name is: ' + this.serverName;
this.servers.push(this.serverName);
    this.serverIsCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
