import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Tool } from '../../_models/tool';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
import { WorkflowStep } from '../../_models/workflowStep';
import { WorkflowService } from '../../_services/workflow.service';
import { Workflow } from '../../_models/workflow';
import { WorkflowOut } from '../../_models/workflowOut';
@Component({
  moduleId: module.id,
  selector: 'step-detail',
  templateUrl: 'step-dialog.component.html',
  styleUrls: ['step-dialog.component.css'],
  exportAs: 'child'
})

export class StepDialogComponent implements OnInit {

  public step: WorkflowStep;
  public isNew: boolean = false;
  public activeWorkflow: Workflow;
  portList: WorkflowOut[] = [];

  constructor(private wfService: WorkflowService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StepDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.step = this.data.step;
    this.activeWorkflow = this.data.workflow;
    this.isNew = this.data.new;
  }


  submitSucceded(tool: Tool) {
    /* this.tool = tool;
     this.isNew = false;
     this.isEdit = false;
     this.toolsChange.emit(true);*/
  }

  deleteStep() {
    /*this.toolService.deleteTool(this.tool)
     .subscribe(res => this.deleteSucceded(res),
     error => this.handleError(error));*/
  }

  deleteSucceded(res: any) {
    /* this.tool = null;
     this.isEdit = false;
     this.isNew = false;
     this.toolsChange.emit(true);*/
  }

  addStep() {
    console.info(this.step);
    if (this.step.neededInputs.find((input) => {
        return !input.mapped;
      })) {
      console.log('FALTA ENTRADA');
    }
    else {
      console.log('OK');
    }

    if (this.isNew) {
      this.wfService.addStepToWorkflow(this.activeWorkflow, this.step).subscribe(
        (workflow) => {
          this.activeWorkflow = workflow;
          this.dialogRef.close(this.activeWorkflow);
        },
        (error) => this.handleError(error)
      );
    } else {
       //TODO: editar y guardar step
      this.dialogRef.close(this.activeWorkflow);
    }
  }

  getPortsFromActiveWorkflow(stepId: string) {
    this.portList = [];
    this.activeWorkflow.steps.find((step) => {
      return step.name === stepId;
    }).neededOutputs.forEach((out) => this.portList.push(out));
    console.info(this.portList);
  }

  private handleError(error: any) {
    console.info(error);
    if (error.status === 304) {
      this.notify('error trying to edit', 'Ok');
    } else {
      //TODO: debería venir un error legible de backend y mostrar eso.
      this.notify('invalid Cwl Tool', 'Ok');
    }
  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }

}
