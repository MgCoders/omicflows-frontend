import {
  RouterModule,
  Routes
} from '@angular/router';
import { NewWorkflowsComponent } from './new-workflows/new-workflows.component';
import { ViewWorkflowsComponent } from './view-workflows/view-workflows.component';
import { WorkflowsComponent } from './workflows.component';

export const WorkflowsRoutes: Routes = [
  {
    path: '',
    component: WorkflowsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      {path: 'new', component: NewWorkflowsComponent},
      {path: 'view', component: ViewWorkflowsComponent}
    ]
  }
];

  export const WorkflowsRoutingModule = RouterModule.forChild(WorkflowsRoutes);
