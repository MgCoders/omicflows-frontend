import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ToolService } from '../../_services/tool.service';
import { Tool } from '../../_models/tool';
import { ToolDetailComponent } from '../tool-detail/tool-detail.component';
import { MatSidenav } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: 'view-tools.component.html',
  styleUrls: ['view-tools.component.css']
})

export class ViewToolsComponent implements OnInit {
  errorMessage: string;
  tools: Tool[] = [];
  selectedTool: Tool = null;
  @ViewChild('detailSideNav')
  detailSideNav: MatSidenav;
  @ViewChild('detailForm')
  detailForm: ToolDetailComponent;
  isNewTool: boolean;

  constructor(public toolService: ToolService) {
  }

  ngOnInit() {
    this.getTools();
  }

  toolsChanged() {
    this.getTools();
    this.detailSideNav.close();
  }

  getTools() {
    this.toolService.getTools()
      .subscribe(
        (tools) => this.tools = tools,
        (error) => this.errorMessage = error as any
      );
  }

  selectTool(tool: Tool) {
    this.detailForm.tool = tool;
    this.detailForm.isNew = false;
    this.detailSideNav.open();
  }

  newTool() {
    this.detailForm.tool = new Tool();
    this.detailForm.isNew = true;
    this.detailSideNav.open();
  }

  public detailSideNavClosed(): void {
    this.detailForm.tool = null;
    this.detailForm.isNew = false;
    this.detailForm.isEdit = false;
  }

}
