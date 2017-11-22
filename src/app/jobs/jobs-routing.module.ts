import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';

export const JobsRoutes: Routes = [
    {
        path: '',
        component: JobsComponent,
        children: [
            // { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'view', component: ViewJobsComponent }
        ]
    }
];

export const JobsRoutingModule = RouterModule.forChild(JobsRoutes);
