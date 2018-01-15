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
    let messages = this.httpClient.get(this.actionUrl, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return messages;
  }

  public getMessageById(id: number): Observable<Messages> {
    let message = this.httpClient.get(this.actionUrl + id, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return message;
  }

  public submitMessage(author: string, content: string): Observable<Messages> {
    let details = {'author': author, 'content': content};
    let message = this.httpClient.post(this.actionUrl, JSON.stringify(details), { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return message;
  }

  public updateMessage(id: number, author: string, content: string): Observable<Messages> {
    let details = {'author': author, 'content': content};
    let message = this.httpClient.put(this.actionUrl + id, JSON.stringify(details), {headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return message;
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

// function mapMessages(response: Response): Messages[] {
//   return response.json().results.map(toMessage);
// }
//
// function mapMessage(response: Response): Messages {
//   return toMessage(response.json());
// }
//
// function toMessage(r: any): Messages {
//   let message = <Messages>({
//     id: Number.parseInt(r.id),
//     url: r.url,
//     author: r.author,
//     content: r.content,
//     date: r.date,
//   });
//   console.log('Parsed message', message);
//   return message;
// }

function handleError (error: any) {
  const errorMsg = error.message || 'Error occured';
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
