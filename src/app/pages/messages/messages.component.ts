import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { Messages } from '../../services/messages/messages';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Profiles } from '../../services/profiles/profiles';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  messages: Messages[];
  profiles: Profiles[];
  isLoading = true;
  isLoadingProfiles = true;

  constructor(private messageService: MessagesService,
              private profileService: ProfilesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.messages = this.messageService.getAllMessages();
    this.messageService.getAllMessages().subscribe(
      data => this.messages = data,
        error => () => console.log('Error while loading messages'),
        () => {
          console.log('Success, messages loaded');
          this.isLoading = false;
        });

    this.profileService.getAllProfiles().subscribe(
      data => this.profiles = data,
      error => () => console.log('Error while loading profiles'),
      () => {
        console.log('Success, profiles loaded');
        this.isLoadingProfiles = false;
      });
  }


  onSubmit(form: NgForm) {
    const author = form.value.messageAuthorInput;
    const content = form.value.messageInput;
    this.messageService.submitMessage(author, content)
      .subscribe(
        data => {
          console.log('Success submitting message');
          this.reloadList();
        },
        err => {
          console.log('Error occured' + err);
        }
      );
  }

  updateMessage(id: number, author: string, content: string) {
    this.messageService.updateMessage(id, author, content)
      .subscribe(
        data => {
          console.log(data);
          this.reloadList();
        },
      err => {
          console.log('Error occured' + err);
      }
    );
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadList();
        },
        err => {
          console.log('Error occured' + err);
        }
      );
  }

  private currentProfile(): Profiles {
    return this.profiles.find(profile => profile.id === 3);
  }

  private reloadList(): void {
    this.messageService.getAllMessages().subscribe(
      data => this.messages = data,
      error => () => console.log('Error while loading messages'),
      () => {
        console.log('Success, messages loaded');
        this.isLoading = false;
      });
  }

  private convertDate(date): string {
    const newDate = date.split('['); // 2018-01-21T00:40:43.557Z[UTC]
    const fromNowDate = moment(newDate[0]).fromNow();
    return fromNowDate.toString();
  }
}
