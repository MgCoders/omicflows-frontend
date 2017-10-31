import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Workflow } from '../_models/workflow';
import { WorkflowStep } from '../_models/workflowStep';
import { environment } from '../../environments/environment';
import { Tool } from '../_models/tool';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WorkflowService {
  constructor(private authHttp: HttpClient) {
  }

  newWorkflow(user: User): Observable<Workflow> {
    return this.authHttp.post<Workflow>(`${environment.apiUrl}/workflows`, user);
  }

  newStep(tool: Tool): Observable<WorkflowStep> {
    console.info('NEW STEP' , tool);
    return this.authHttp.get<WorkflowStep>(`${environment.apiUrl}/workflows/step/` + tool.id);
  }

  addStepToWorkflow(workflow: Workflow, step: WorkflowStep): Observable<Workflow> {
    return this.authHttp.post<Workflow>(`${environment.apiUrl}/workflows` + workflow.id, step);
  }

  closeWorkflow(workflow: Workflow): Observable<Workflow> {
    console.info('CLOSE WF' , workflow);
    return this.authHttp.get<Workflow>(`${environment.apiUrl}/workflows` + workflow.id);
  }


}
