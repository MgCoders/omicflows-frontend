  import {
  RouterModule,
  Routes
} from '@angular/router';
  import { ViewWorkflowsComponent } from './view-workflows/view-workflows.component';

  export const WorkflowsRoutes: Routes = [
  {
    path: '',
    component: ViewWorkflowsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'view', component: ViewWorkflowsComponent }
    ]
  }
];

  export const WorkflowsRoutingModule = RouterModule.forChild(WorkflowsRoutes);
