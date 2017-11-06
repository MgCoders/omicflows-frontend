import { ToolService } from '../_services/tool.service';
import { SharedModule } from '../shared/shared.module';
import { ToolsRoutingModule } from './tools-routing.module';
import { NgModule } from '@angular/core';
import { ViewToolsComponent } from './view-tools/view-tools.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';

@NgModule({
  imports: [CommonModule, ToolsRoutingModule, SharedModule, MatCardModule, MatInputModule, MatButtonModule],
  declarations: [ToolsComponent, ViewToolsComponent, ToolDetailComponent],
  exports: [ToolsComponent, ViewToolsComponent],
  providers: [ToolService]
})

export class ToolsModule {
}
