import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	@Input('contact') contact;

	imageSource() {
		return './assets/' + this.contact.name + '.png';
	}

  constructor() { }

  ngOnInit() {
  }

}
