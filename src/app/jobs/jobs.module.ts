
import { NgModule } from '@angular/core';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { NewJobComponent } from './new-job/new-job.component';
import { RunJobComponent } from './run-job/run-job.component';
import {JobService} from '../_services/job.service';

@NgModule({
    imports: [CommonModule, JobsRoutingModule, SharedModule],
    declarations: [JobsComponent, ViewJobsComponent, JobDetailComponent, NewJobComponent, RunJobComponent],
    exports: [JobsComponent, ViewJobsComponent],
    providers: [JobService]
})

export class JobsModule {
}
