import {
  Component,
  OnInit
} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { WorkflowService } from '../../_services/workflow.service';
import { Workflow } from '../../_models/workflow';

@Component({
  selector: 'app-view-workflows',
  templateUrl: './view-workflows.component.html',
  styleUrls: ['./view-workflows.component.scss']
})
export class ViewWorkflowsComponent implements OnInit {

  workflows: Workflow[] = [];

  constructor(public wfService: WorkflowService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.wfService.getWorkflows()
      .subscribe(
        (workflows) => this.workflows = workflows,
        (error) => this.handleError(error)
      );
  }

  private handleError(error: any) {
    console.info(error);
    // TODO: debería venir un error legible de backend y mostrar eso.
    this.notify('error al cargar Tools', 'Ok');

  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }

}
