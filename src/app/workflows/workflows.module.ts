import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows.component';
import { WorkflowService } from '../_services/workflow.service';
import { StepDetailComponent } from './step-detail/step-detail.component';
import { MapeoPuertoComponent } from './mapeo-puerto/mapeo-puerto.component';
import { NewStepComponent } from './new-step/new-step.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, WorkflowsRoutingModule, SharedModule, MatCardModule, MatInputModule, MatButtonModule],
  declarations: [WorkflowsComponent, StepDetailComponent, MapeoPuertoComponent, NewStepComponent],
  exports: [WorkflowsComponent, StepDetailComponent, MapeoPuertoComponent],
  providers: [WorkflowService]
})
export class WorkflowsModule {
}
