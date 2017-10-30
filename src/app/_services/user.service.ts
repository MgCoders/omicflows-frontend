import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(public authHttp: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.authHttp.get<User[]>(`${environment.apiUrl}/users/`);
  }

}
