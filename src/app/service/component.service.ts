import { Injectable } from '@angular/core';
import { InputTextComponent } from '../elements/input-text/input-text.component';
import { TableComponent } from '../elements/table/table.component';
import { SpinnerComponent } from '../elements/spinner/spinner.component';
import { FooterComponent } from '../elements/footer/footer.component';
import { HeaderComponent } from '../elements/header/header.component';
import { ButtonComponent } from '../elements/button/button.component';
import { DividerComponent } from '../elements/divider/divider.component';
import { MaskComponent } from '../elements/mask/mask.component';

import { ComponentItem } from '../component-item';
import { TimeComponent } from '../elements/time/time.component';
import { DropDownComponent } from '../elements/drop-down/drop-down.component';
@Injectable()
export class ComponentService {

  constructor() { }

  getComponent(type) {
    let component;
    switch (type) {
      case "textbox": component = InputTextComponent;
        break;
      case "table": component = TableComponent;
        break;
      case "spinner": component = SpinnerComponent;
        break;
      case "footer": component = FooterComponent;
        break;
      case "header": component = HeaderComponent;
        break;
      case "time": component = TimeComponent;
        break;
      case "dropdown": component = DropDownComponent;
        break;
      case "button": component = ButtonComponent;
        break;
      case "div": component = DividerComponent;
        break;
      case "mask": component = MaskComponent;
        break;
    }
    return component ? new ComponentItem(component, {}) : null;
  }
}