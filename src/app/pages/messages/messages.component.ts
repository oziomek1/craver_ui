import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  public values: any[];

  constructor(private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.messageService
        .getAllMessages<any[]>()
        .subscribe((data: any[]) => this.values = data,
        error => () => {
          console.log('Error while loading messages');
        },
        () => {
          console.log('Success, messages loaded');
        });
  }

}
