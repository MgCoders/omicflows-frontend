import {Workflow} from './workflow';
import {JobResource} from './JobResource';

export class Job {
    public id: string;
    public userId: string;
    public workflowId: string;
    public workflow: Workflow;
    public resources: JobResource[];
    public ready: boolean;
    public inputsFilePath: string;
    public jsonWorkflowFilePath: string;
    public yamlWorkflowFilePath: string;
}
