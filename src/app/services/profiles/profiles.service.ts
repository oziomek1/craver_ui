import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import { Profiles } from './profiles';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class ProfilesService {
  private actionUrl: string;

  constructor(private httpClient: HttpClient, private _configuration: Configuration) {
    this.actionUrl = this._configuration.ServerWithApiUrl + '/profiles/';
  }

  public getAllProfiles(): Observable<Profiles[]> {
    const profiles = this.httpClient.get(this.actionUrl, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return profiles;
  }

  public getProfileyId(profileName: string): Observable<Profiles> {
    const profile = this.httpClient.get(this.actionUrl + profileName, { headers: this.getHeaders()})
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    return profile;
  }

  public submitProfile(profileName: string, firstName: string, lastName: string): any {
    const details = {'profileName': profileName, 'firstName': firstName, 'lastName': lastName};
    const profile = this.httpClient.post(this.actionUrl, details, { headers: this.getHeaders()});
    return profile;
  }

  public updateProfile(profileName: string, firstName: string, lastName: string): any {
    const details = {'profileName': profileName, 'firstName': firstName, 'lastName': lastName};
    const profile = this.httpClient.put(this.actionUrl + profileName, details, {headers: this.getHeaders()});
    return profile;
  }

  public deleteMessage(profileName: string): any {
    const profile = this.httpClient.delete(this.actionUrl + profileName);
    return profile;
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    // headers.append('Accept', 'application/json');
    headers.append('Accept', 'application/xml');
    headers.append('Accept', 'text/xml');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
