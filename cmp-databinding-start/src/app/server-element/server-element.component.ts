import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input('srvElement') element: { type: string, name: string, content: string };
	@Input() name: string;
	@ViewChild('heading') header: ElementRef;
	@ContentChild('contentParagraph') paragraph: ElementRef;

	constructor() {
		console.log("Constructor call.");
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("ngOnChanges call.");
		console.log(changes);
	}

	ngOnInit() {
		console.log("ngOnInit call.");
		console.log("Text Content: " + this.header.nativeElement.textContent);
		console.log("Text Content of Parahraph: " + this.paragraph.nativeElement.textContent);
	}

	ngDoCheck() {
		console.log("ngDoCheck call.");
	}

	ngAfterContentInit() {
		console.log("ngAfterContentInit call.");
		console.log("Text Content of Parahraph: " + this.paragraph.nativeElement.textContent);
	}

	ngAfterContentChecked() {
		console.log("ngAfterContentChecked call.");
	}

	ngAfterViewInit() {
		console.log("ngAfterViewInit call.");
		console.log("Text Content: " + this.header.nativeElement.textContent);
	}

	ngAfterViewChecked() {
		console.log("ngAfterViewChecked call.");
	}

	ngOnDestroy() {
		console.log("ngOnDestroy call.");
	}

}
