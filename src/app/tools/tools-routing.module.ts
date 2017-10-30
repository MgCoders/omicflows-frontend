import {
  RouterModule,
  Routes
} from '@angular/router';
import { ToolsComponent } from './tools.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';

export const ToolsRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'detail', component: ToolDetailComponent }
    ]
  }
];

export const ToolsRoutingModule = RouterModule.forChild(ToolsRoutes);
