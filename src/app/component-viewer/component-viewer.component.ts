import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ElementHostDirective } from '../element-host.directive';
import { ComponentService } from '../service/component.service';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent implements OnInit {
  @ViewChild(ElementHostDirective) elementHost: ElementHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver
    , private componentService: ComponentService) { }

  ngOnInit() {

  }

  drop(ev) {
    ev.preventDefault();
    let component_type = ev.dataTransfer.getData("text");
    this.loadComponent(component_type);
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  loadComponent(component_type) {
    if (component_type) {
      let elementComponent = this.componentService.getComponent(component_type);
      if (elementComponent) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(elementComponent.component);
        let viewContainerRef = this.elementHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
      }

    }
  }

}