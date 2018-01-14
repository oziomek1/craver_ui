import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../app.constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = this._configuration.ServerWithApiUrl + '/messages/';
  }

  public getAllMessages<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

  public getMessageById<T>(id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }
}
