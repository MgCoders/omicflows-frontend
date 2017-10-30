import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Tool } from '../../_models/tool';
import { ToolService } from '../../_services/tool.service';
import { MatSnackBar } from '@angular/material';
@Component({
  moduleId: module.id,
  selector: 'tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['src/app/tools/tool-detail/tool-detail.component.css'],
  exportAs: 'child'
})

export class ToolDetailComponent {
  @Input()
  public tool: Tool;
  @Output()
  public toolsChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  public isNew: boolean = false;
  public isEdit: boolean = this.isNew;

  constructor(private toolService: ToolService, private snackBar: MatSnackBar) {
  }

  onSubmit() {
    this.toolService.saveTool(this.tool)
      .subscribe(
        (res) => this.submitSucceded(res),
        (error) => this.handleError(error)
      );
  }

  submitSucceded(tool: Tool) {
    this.tool = tool;
    this.isNew = false;
    this.isEdit = false;
    this.toolsChange.emit(true);
  }

  isEditEnabled(): boolean {
    return this.isNew || this.isEdit;
  }

  deleteTool() {
    this.toolService.deleteTool(this.tool)
      .subscribe(
        (res) => this.deleteSucceded(res),
        (error) => this.handleError(error));
  }

  deleteSucceded(res: any) {
    this.tool = null;
    this.isEdit = false;
    this.isNew = false;
    this.toolsChange.emit(true);
  }

  private handleError(error: any) {
    console.info(error);
    if (error.status === 304) {
      this.notify('error trying to edit', 'Ok');
    } else {
      //TODO: debería venir un error legible de backend y mostrar eso.
      this.notify('invalid Cwl Tool', 'Ok');
    }
  }

  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }

}
