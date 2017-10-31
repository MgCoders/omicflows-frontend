import {
  RouterModule,
  Routes
} from '@angular/router';
import { ViewToolsComponent } from './view-tools/view-tools.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';

export const ToolsRoutes: Routes = [
  {
    path: '',
    component: ViewToolsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'view', component: ViewToolsComponent },
      { path: 'detail', component: ToolDetailComponent }
    ]
  }
];

export const ToolsRoutingModule = RouterModule.forChild(ToolsRoutes);
