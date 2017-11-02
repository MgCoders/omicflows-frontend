import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { ViewWorkflowsComponent } from './view-workflows/view-workflows.component';
import { WorkflowService } from '../_services/workflow.service';
import { ToolService } from '../_services/tool.service';
import { StepDetailComponent } from './step-detail/step-detail.component';
import { MapeoPuertoComponent } from './mapeo-puerto/mapeo-puerto.component';
import { NewStepComponent } from './new-step/new-step.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { ToolsModule } from '../tools/tools.module';
import { ToolDialogComponent } from './tool-dialog/tool-dialog.component';

@NgModule({
  imports: [CommonModule, WorkflowsRoutingModule, SharedModule, MatCardModule, MatInputModule, MatButtonModule, MatDialogModule],
  declarations: [ViewWorkflowsComponent, ToolDialogComponent/*, StepDetailComponent, MapeoPuertoComponent, NewStepComponent*/],
  exports: [ViewWorkflowsComponent, ToolDialogComponent/*, StepDetailComponent, MapeoPuertoComponent*/],
  providers: [WorkflowService, ToolService],
  entryComponents: [
    ToolDialogComponent,
  ]
})
export class WorkflowsModule {
}
