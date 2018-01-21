import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';
import { Messages } from '../../services/messages/messages';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  messages: Messages[];
  isLoading = true;

  constructor(private messageService: MessagesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.messages = this.messageService.getAllMessages();
    this.messageService.getAllMessages().subscribe(
      data => this.messages = data,
        error => () => console.log('Error while loading messages'),
        () => {
          console.log('Success, messages loaded', this.messages);
          this.isLoading = false;
        });
  }

  private convertDate(date) {
    let newDate = date.split('['); // 2018-01-21T00:40:43.557Z[UTC]
    let fromNowDate = moment(newDate[0]).fromNow();
    return fromNowDate.toString();
  }
}
