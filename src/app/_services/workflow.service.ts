import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Workflow } from '../_models/workflow';
import { WorkflowStep } from '../_models/workflowStep';
import { environment } from '../../environments/environment';
import { Tool } from '../_models/tool';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class WorkflowService {
  constructor(private authHttp: HttpClient,
              private authService: AuthService) {
  }

  newWorkflow(): Observable<Workflow> {
    return this.authHttp.post<Workflow>(`${environment.apiUrl}/workflows`, this.authService.getCurrentUser());
  }

  getWorkflows(): Observable<Workflow[]> {
    return this.authHttp.get<Workflow[]>(`${environment.apiUrl}/workflows/` + this.authService.getCurrentUser().id);
  }

  newStep(tool: Tool): Observable<WorkflowStep> {
    return this.authHttp.get<WorkflowStep>(`${environment.apiUrl}/workflows/step/` + tool.id);
  }

  addStepToWorkflow(workflow: Workflow, step: WorkflowStep): Observable<Workflow> {
    return this.authHttp.post<Workflow>(`${environment.apiUrl}/workflows/` + workflow.id, step);
  }

  closeWorkflow(workflow: Workflow): Observable<Workflow> {
    return this.authHttp.get<Workflow>(`${environment.apiUrl}/workflows/close/` + workflow.id);
  }


}
