import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import {RunJobComponent} from './run-job/run-job.component';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {NewJobComponent} from './new-job/new-job.component';

export const JobsRoutes: Routes = [
    {
        path: '',
        component: JobsComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'view', component: ViewJobsComponent },
            { path: 'run', component: RunJobComponent },
            { path: 'detail/:id', component: JobDetailComponent },
            { path: 'new', component: NewJobComponent }
        ]
    }
];

export const JobsRoutingModule = RouterModule.forChild(JobsRoutes);
