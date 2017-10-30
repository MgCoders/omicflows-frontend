import { NgModule } from '@angular/core';

import { EChartsDirective } from './echarts.directive';
import { SlimScrollDirective } from './slim-scroll.directive';
import { VisCanvasComponent } from './vis-canvas/vis-canvas.component';

@NgModule({
  imports: [],
  declarations: [
    EChartsDirective,
    SlimScrollDirective,
    VisCanvasComponent
  ],
  exports: [
    EChartsDirective,
    SlimScrollDirective,
  ]
})

export class SharedModule {}
