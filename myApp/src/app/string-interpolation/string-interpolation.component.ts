import { Component } from '@angular/core';

@Component({
	selector: 'app-string-interpolation',
	templateUrl: './string-interpolation.component.html',
	styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

    messageID: number = 10;
    messageStatus: string = "Offline";

	constructor() {
		var random = Math.random();
		if (random > 0.5) {
			this.messageStatus = "Online";
		} else {
			this.messageStatus = "Offline";
		}
	}

    getMessageStatus() {
        return this.messageStatus;
    }

	getColor() {
		return this.messageStatus === "Online" ? "green" : "red";
	}
}
