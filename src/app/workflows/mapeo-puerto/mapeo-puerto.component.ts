import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Workflow } from '../../_models/workflow';
import { WorkflowOut } from '../../_models/workflowOut';
import { WorkflowIn } from '../../_models/workflowIn';
@Component({
  moduleId: module.id,
  selector: 'mapeo-puerto',
  templateUrl: 'mapeo-puerto.component.html',
  exportAs: 'child'
})

export class MapeoPuertoComponent {
  @Input()
  public modelMapeo: WorkflowIn;
  @Output()
  public modelMapeoChange = new EventEmitter();
  @Input()
  public activeWorkflow: Workflow;
  portList: WorkflowOut[] = [];

  getPortsFromActiveWorkflow(stepId: string) {
    this.portList = [];
    this.activeWorkflow.steps.find((step) => {
      return step.name === stepId;
    }).neededOutputs.forEach((out) => this.portList.push(out));
    console.info(this.portList);
  }

}
