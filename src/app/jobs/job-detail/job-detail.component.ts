import { Component, OnInit } from '@angular/core';
import {JobService} from '../../_services/job.service';
import {Job} from '../../_models/job';
import {ActivatedRoute} from '@angular/router';

@Component({
      moduleId: module.id,
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  errorMessage: string;
  job: Job;

  constructor(
      public jobService: JobService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJob();
  }

  getJob() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.jobService.getJob(id)
    //     .subscribe(
    //     (job) => this.job = job,
    //     (error) => this.errorMessage = error as any
    // );
    console.log('JobDetailComponent  id : ' + id);
  }

}
