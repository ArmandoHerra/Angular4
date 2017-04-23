import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-string-interpolation',
	templateUrl: './string-interpolation.component.html',
	styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

    messageID: number = 2;
    messageStatus: string = "Offline";

	constructor() {
		this.messageStatus = Math.random() > 0.5 ? "online" : "offline";
	}

    getMessageStatus() {
        return this.messageStatus;
    }

	getColor() {
		return this.messageStatus = "online" ? "green" : "red";
	}

	ngOnInit() {

	}

}
