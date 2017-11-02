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
  template: `<h1 md-dialog-title>Tools</h1>
    <div md-dialog-content style="padding-bottom: 20px;">
      <div class="box box-default">
        <div class="box-header">Lists with avatars</div>
        <div class="box-body">
          <mat-list>
            <mat-list-item *ngFor="let tool of tools">
              <img mat-list-avatar [src]="tool.avatar" alt="avatar">
              <h3 mat-line> {{tool.name}} </h3>
              <button mat-button class="mat-icon-button" aria-label="choose"
                      (click)="dialogRef.close(tool)">
                <mat-icon class="material-icons">add</mat-icon>
              </button>
            </mat-list-item>
          </mat-list>
        </div>
      </div>
    </div>
    <div md-dialog-actions>
      <button mat-button (click)="dialogRef.close()">Close</button>
    </div>`,
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
