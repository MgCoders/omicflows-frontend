import {
  Component,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
import { ToolService } from '../../_services/tool.service';
import { VisCanvasComponent } from '../../shared/vis-canvas/vis-canvas.component';

// openDialogWithAResult
@Component({
  selector: 'dialog-workflow-dialog',
  templateUrl: 'workflow-dialog.component.html',
})
export class WorkflowDialogComponent implements OnInit {

  @ViewChild('visCanvas')
  visCanvas: VisCanvasComponent;

  ngOnInit(): void {
    console.log(this.workflow);
  }

  constructor(public dialogRef: MatDialogRef<WorkflowDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public workflow: any,
              public toolService: ToolService,
              private snackBar: MatSnackBar) {
  }
}
