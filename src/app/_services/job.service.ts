import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../_models/job';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/of';

@Injectable()
export class JobService {

    constructor(public authHttp: HttpClient) {}

    getJobs(): Observable<Job[]> {
        return this.authHttp.get<Job[]>(`${environment.apiUrl}/jobs`);
    }

    // getJob(id: string): Observable<Job> {
    //     return new Observable().of(Job); // TODO ver con Raul el servicio...
    // }

}
