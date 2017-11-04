import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { NewWorkflowsComponent } from './new-workflows/new-workflows.component';
import { WorkflowService } from '../_services/workflow.service';
import { ToolService } from '../_services/tool.service';
import { StepDialogComponent } from './step-detail/step-dialog.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { ToolDialogComponent } from './tool-dialog/tool-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, WorkflowsRoutingModule, SharedModule, MatCardModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule],
  declarations: [NewWorkflowsComponent, ToolDialogComponent, StepDialogComponent /*, MapeoPuertoComponent, NewStepComponent*/],
  exports: [NewWorkflowsComponent, ToolDialogComponent, StepDialogComponent/*, MapeoPuertoComponent*/],
  providers: [WorkflowService, ToolService],
  entryComponents: [
    ToolDialogComponent,
    StepDialogComponent
  ]
})
export class WorkflowsModule {
}
