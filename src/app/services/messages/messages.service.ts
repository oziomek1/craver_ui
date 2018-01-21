import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import { Messages } from './messages';
import 'rxjs/Rx';

@Injectable()
export class MessagesService {

  private actionUrl: string;

  constructor(private httpClient: HttpClient, private _configuration: Configuration) {
    this.actionUrl = this._configuration.ServerWithApiUrl + '/messages/';
  }

  public getAllMessages(): Observable<Messages[]> {
    const messages = this.httpClient.get(this.actionUrl, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return messages;
  }

  public getMessageById(id: number): Observable<Messages> {
    const message = this.httpClient.get(this.actionUrl + id, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return message;
  }

  public submitMessage(author: string, content: string): any {
    console.log(author + ' ' + content);
    const details = {'author': author, 'content': content};
    const message = this.httpClient.post(this.actionUrl, details, { headers: this.getHeaders()});
    return message;
  }

  public updateMessage(id: number, author: string, content: string): any {
    const details = {'author': author, 'content': content};
    const message = this.httpClient.put(this.actionUrl + id, details, {headers: this.getHeaders()});
    return message;
  }

  public deleteMessage(id: number): any {
    const message = this.httpClient.delete(this.actionUrl + id);
    return message;
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Accept', 'application/xml');
    headers.append('Accept', 'text/xml');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

