import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	paragraphDisplay: boolean = false;
	counterLog = ["0"];
	counter: number = 0;
	lastItem: number = 0;
	backgroundColor: string = ""
	valid: boolean = false;

	constructor() {

	}

	onClick() {
		if (this.paragraphDisplay == false) {
			this.paragraphDisplay = true;
		} else {
			this.paragraphDisplay = false;
		}
		this.counter++;
		this.counterLog.push("" + this.counter);
		console.log(this.counterLog);
	}

	getBackgroundColor() {
		for (var i = 0; i < this.counterLog.length; i++) {
			this.lastItem = i;
		}
		if (this.lastItem >= 5) {
			this.valid = true;
			return this.backgroundColor = "blue";
		}
	}

}
