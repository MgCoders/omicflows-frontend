  import {
  RouterModule,
  Routes
} from '@angular/router';
  import { NewWorkflowsComponent } from './new-workflows/new-workflows.component';

  export const WorkflowsRoutes: Routes = [
  {
    path: '',
    component: NewWorkflowsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'new', component: NewWorkflowsComponent }
    ]
  }
];

  export const WorkflowsRoutingModule = RouterModule.forChild(WorkflowsRoutes);
