import { Component, OnInit } from '@angular/core';
import {JobService} from '../../_services/job.service';
import {Job} from '../../_models/job';

@Component({
  moduleId: module.id,
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {
  errorMessage: string;
  jobs: Job[];

  constructor(public jobService: JobService) { }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    console.log('ViewJobsComponent :: getTools');
    this.jobService.getJobs()
        .subscribe(
            (jobs) => this.jobs = jobs,
            (error) => this.errorMessage = error as any
        );
  }

}
