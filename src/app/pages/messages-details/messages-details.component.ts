import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Messages } from '../../services/messages/messages';
import {MessagesService} from '../../services/messages/messages.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-messages-details',
  templateUrl: './messages-details.component.html',
  styleUrls: ['./messages-details.component.scss']
})
export class MessagesDetailsComponent implements OnInit, OnDestroy {
  id: number;
  message: Messages;
  subscription: any;

  constructor(private messagesService: MessagesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(data => {
        let id = Number.parseInt(data['id']);
        this.messagesService.getMessageById(id).subscribe(message =>
        this.message = message);
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    const link = ['/messages'];
    this.router.navigate(link);
  }
}
