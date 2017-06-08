import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus: string = "No server has been created!";
	serverName = "Test Server";
	serverCreated = false;

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}
	ngOnInit() { }

	onCreateServer() {
		this.serverCreated = true;
		this.serverCreationStatus = "A new server has been created!";
	}

	onUpdateServerName(event: any) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}

}
