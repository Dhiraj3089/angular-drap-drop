import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { TableComponent } from './elements/table/table.component';
import { ElementHostDirective } from './element-host.directive';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentViewerComponent } from './component-viewer/component-viewer.component';
import { ComponentService } from './service/component.service';
import { SpinnerComponent } from './elements/spinner/spinner.component';
import { DataTableService } from './service/datatable.service';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { DividerComponent } from './elements/divider/divider.component';
import { DropDownComponent } from './elements/drop-down/drop-down.component';
import { ButtonComponent } from './elements/button/button.component';
import { MaskComponent } from './elements/mask/mask.component';
import { TimeComponent } from './elements/time/time.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [ComponentService, DataTableService],
  declarations: [AppComponent,
    InputTextComponent,
    TableComponent,
    ElementHostDirective,
    ComponentListComponent,
    ComponentViewerComponent,
    SpinnerComponent,
    FooterComponent,
    HeaderComponent,
    DividerComponent,
    DropDownComponent,
    ButtonComponent,
    MaskComponent,
    TimeComponent],
  entryComponents: [InputTextComponent,
    TableComponent, SpinnerComponent,
    FooterComponent,
    HeaderComponent,
    DividerComponent,
    DropDownComponent,
    ButtonComponent,
    MaskComponent,
    TimeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
