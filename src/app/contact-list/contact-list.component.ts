import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input("contacts") contacts;

  constructor() { }

  ngOnInit() {
  	console.log(this.contacts);
  }

  selected = (name) => {
  	if(name === 'Jess Dawson')
  		return true;
  	return false;
  }
}
