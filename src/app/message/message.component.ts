import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
	@Input('message') message;
  date;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date(Date.parse(this.message.time))
    this.date = this.date.getHours()%12+':'+this.date.getMinutes()+(this.date.getHours()>12?'am':'pm');
    console.log(this.date);
    return this.date;  
  }

  imageSource() {
  	if(this.message.recipient) {
  		return './assets/' + this.message.recipient + '.png';
  	} else {
      return false;
  	}
  }

  messageDate() {
    
  }
}
