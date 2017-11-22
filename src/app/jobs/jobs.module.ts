
import { NgModule } from '@angular/core';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './jobs.component';

@NgModule({
    imports: [CommonModule, JobsRoutingModule, SharedModule],
    declarations: [JobsComponent, ViewJobsComponent],
    exports: [JobsComponent, ViewJobsComponent],
    providers: []
})

export class JobsModule {
}
