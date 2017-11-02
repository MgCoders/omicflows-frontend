import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { Workflow } from '../../_models/workflow';
import { WorkflowStep } from '../../_models/workflowStep';
import { Network, DataSet, Edge, IdType } from 'vis';


//declare var vis: any;
/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'vis-canvas',
  templateUrl: 'vis-canvas.component.html',
  styleUrls: ['vis-canvas.component.css']
})
export class VisCanvasComponent implements OnInit {

   @Output()
   clickEvent: EventEmitter<any> = new EventEmitter();
   nodes: any = new DataSet([]);
   edges: any = new DataSet([]);
   container: any;
   network: any;

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    this.container = document.getElementById('mynetwork');
    const data = {
      nodes: this.nodes,
      edges: this.edges
    };
    const options = {
      autoResize: true,
      height: '100%',
      width: '100%',
      layout: {
        hierarchical:
          {
            enabled: true,
            direction: 'UD'
          }
      },
      physics: {
        enabled: false
      },
      manipulation: {
        enabled: false
      },
      nodes: {
        shape: 'image',
        image: 'https://s3.amazonaws.com/of-tools-icons/d2.png',
        font: '12px arial white'
      },
      edges: {
        arrows: 'middle',
        font: {
          size: 12,
          face: 'arial',
          strokeWidth: 0,
          color: 'white'
        }
      }
    };
    this.network = new Network(this.container, data, options);

    this.nodes.add({label: 'CHAU', id: 2});
    this.nodes.add({label: 'HOLA', id: 1});
    this.edges.add({to: 1, from: 2});

    this.network.on('click', (obj: any) => this.clickEvent.emit(obj));
  }

  /**
   * Me pasan el WF que adentro tiene lo necesario
   * para volver a generar nodos y edges.
   * Esta funcion hace la magia.
   * @param wf
   */
  public updateWorkflow(workflow: Workflow) {
    console.info('UPDATE GRAPH');
    this.nodes.clear();
    this.edges.clear();
    workflow.steps.forEach((step) => {
      console.info('ADD NODE ' + step.id);
      step.neededInputs.filter((input) => input.mapped).forEach((input) => {
        this.edges.add({from: input.sourceMappedToolName, to: step.name, label: input.schema + ':' + input.sourceMappedPortName + '->' + input.name});
      });
      this.nodes.add(new Node(step, step.name, step.id));
    });
    // TODO:se pueden dibujar las entradas y salidas como nodos tmb, y en el slider dar la posibilidad de subir los archivos???
  }

}
export class Node {
  public image: string = '';
  constructor(public tool: WorkflowStep, public id: string, public label: string) {
    this.tool = tool;
    this.id = id;
    this.label = label;
    if (this.tool.neededInputs.find((input) => {
        return !input.mapped;
      })) {
      this.image = 'https://s3.amazonaws.com/of-tools-icons/s3-logo.png';
    } else {
      this.image = 'https://s3.amazonaws.com/of-tools-icons/d2.png';
    }
  }
}
