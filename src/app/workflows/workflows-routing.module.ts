import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { WorkflowsComponent } from './workflows.component';

export const ToolsRoutes: Routes = [
  {
    path: '',
    component: WorkflowsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' }
    ]
  }
];

export const WorkflowsRoutingModule = RouterModule.forChild(ToolsRoutes);
