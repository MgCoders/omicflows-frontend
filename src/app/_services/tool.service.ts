import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tool } from '../_models/tool';
import { environment } from '../../environments/environment';

@Injectable()
export class ToolService {
  constructor(public authHttp: HttpClient) {}

  getTools(): Observable<Tool[]> {
    return this.authHttp.get<Tool[]>(`${environment.apiUrl}/tools`);
  }

  saveTool(tool: Tool): Observable<Tool> {
    console.info('SAVE' + tool);
    return this.authHttp.post<Tool>(`${environment.apiUrl}/tools/save`, tool);
  }

  deleteTool(tool: Tool): Observable<Tool> {
    console.info('DELETE' + tool);
    return this.authHttp.delete<Tool>(`${environment.apiUrl}/tools/delete/` + tool.id);
  }

}
