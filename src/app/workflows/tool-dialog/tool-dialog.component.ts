import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
import { ToolService } from '../../_services/tool.service';
import { Tool } from '../../_models/tool';

// openDialogWithAResult
@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'tool-dialog.component.html',
})
export class ToolDialogComponent implements OnInit {

  tools: Tool[] = [];

  ngOnInit(): void {
    this.getTools();
  }
  constructor(public dialogRef: MatDialogRef<ToolDialogComponent>,
              public toolService: ToolService,
              private snackBar: MatSnackBar) {}

  getTools() {
    this.toolService.getTools()
      .subscribe(
        (tools) => this.tools = tools,
        (error) => this.handleError(error)
      );
  }

  private handleError(error: any) {
    console.info(error);
    // TODO: debería venir un error legible de backend y mostrar eso.
    this.notify('error al cargar Tools', 'Ok');

  }
  private notify(status: any, text: any) {
    this.snackBar.open(status, text, {
      duration: 3000
    });
  }
}
