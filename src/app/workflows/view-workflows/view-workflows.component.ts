import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatDialog,
  MatSidenav,
  MatSnackBar
} from '@angular/material';
import { ToolService } from '../../_services/tool.service';
import { Tool } from '../../_models/tool';
import { WorkflowService } from '../../_services/workflow.service';
import { User } from '../../_models/user';
import { VisCanvasComponent } from '../../shared/vis-canvas/vis-canvas.component';
import { Workflow } from '../../_models/workflow';
import { ToolDialogComponent } from '../tool-dialog/tool-dialog.component';
import { WorkflowStep } from '../../_models/workflowStep';
import { StepDialogComponent } from '../step-detail/step-dialog.component';
// import { WorkflowStep } from '../../_models/workflowStep';
// import { StepDialogComponent } from '../step-detail/step-detail.component';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'graph-component',
  templateUrl: 'view-workflows.component.html'
})
export class ViewWorkflowsComponent implements OnInit {

  /*@ViewChild('graphDetail')
  detailSideNav: MatSidenav;*/
  @ViewChild('visCanvas')
  visCanvas: VisCanvasComponent;
  /*@ViewChild('stepDetail')
  stepDetail: StepDialogComponent;*/
  activeWorkflow: Workflow = null;
  selectedObject: WorkflowStep = null;
  selectedIsNew: boolean = false;
  tools: Tool[] = [];

  constructor(public wfService: WorkflowService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newWorkflow();
  }

  openDialogChooseTools() {
    const dialogRef = this.dialog.open(ToolDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.newStep(result);
      }
    });
  }

  openDialogStepDetail(newStep: WorkflowStep, isNew: boolean) {
    const dialogRef = this.dialog.open(StepDialogComponent, { data: { step: newStep, workflow: this.activeWorkflow, new: isNew }});
    dialogRef.afterClosed().subscribe((workflow) => {
      this.activeWorkflow = workflow;
      this.visCanvas.updateWorkflow(this.activeWorkflow);
    });
  }

  canvasClicked(obj: any) {
    const selectedNode = obj.nodes[0];
    if (selectedNode) {
      const step = this.activeWorkflow.steps.find((astep) => astep.name === selectedNode);
      this.openDialogStepDetail(step, false);
      this.selectedIsNew = false;
    //  this.selectedObject = step;
      //this.detailSideNav.open();
    }
  }

  exitDetail() {
   // this.detailSideNav.close();
  //  this.selectedObject = null;
  }



  newWorkflow() {
    const user = new User();
    user.id = '1';
    this.wfService.newWorkflow(user).subscribe(
      (wf) => this.activeWorkflow = wf,
      (error) => this.handleError(error)
    );
  }

  newStep(tool: Tool) {
    this.wfService.newStep(tool).subscribe(
      (step) => this.openDialogStepDetail(step, true),
      (error) => this.handleError(error)
    );
  }

  newStepSucceded(step: WorkflowStep) {
    this.selectedIsNew = true;
    this.selectedObject = step;
  }

  updateCanvas(workflow: Workflow) {
    this.activeWorkflow = workflow;
    this.visCanvas.updateWorkflow(this.activeWorkflow);
 //   this.selectedObject = null;
    this.selectedIsNew = false;
  }

  closeWf() {
    this.wfService.closeWorkflow(this.activeWorkflow).subscribe(
      (wf) => {
        this.notify('Correcto!', 'OK');
        this.activeWorkflow = wf;
        console.info('WF TERMINADO: ', this.activeWorkflow);
      },
      (error) => this.handleError(error)
    );
  }

  private handleError(error: any) {
    console.info(error);

    //TODO: debería venir un error legible de backend y mostrar eso.
    this.notify('error al cargar Tools', 'Ok');

  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }
}
