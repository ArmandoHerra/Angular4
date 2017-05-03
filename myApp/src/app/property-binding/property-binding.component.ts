import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-property-binding',
	templateUrl: './property-binding.component.html',
	styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

    allowNewMessage = false;
    messageCreationStatus = "No message was created.";
	messageName = "Test Message";
	messageCreated = false;
	messages = ["Test Message", "Test Message 2"]

	constructor() {
        setTimeout(() => {
            this.allowNewMessage = true;
        }, 2000);
    }

	ngOnInit() {
	}

    onCreateMessage() {
		this.messageCreated = true;
		this.messages.push(this.messageName);
        this.messageCreationStatus = "Message was created! Name is " + this.messageName;
    }

	onUpdateMessageName(event: Event) {
		this.messageName = (<HTMLInputElement>event.target).value;
	}

}
