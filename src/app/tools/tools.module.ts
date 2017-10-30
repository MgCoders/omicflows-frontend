import { ToolService } from '../_services/tool.service';
import { SharedModule } from '../shared/shared.module';
import { ToolsRoutingModule } from './tools-routing.module';
import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ToolsRoutingModule, SharedModule, MatCardModule, MatInputModule, MatButtonModule],
  declarations: [ToolsComponent, ToolDetailComponent],
  exports: [ToolsComponent],
  providers: [ToolService]
})

export class ToolsModule {
}
