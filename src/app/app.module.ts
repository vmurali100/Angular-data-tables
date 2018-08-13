import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MDataTableModule} from 'mdata-table';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleComponent } from './simple/simple.component';
import { DefaultComponent } from './responsive/default/default.component';
import { TemplateExpandComponent } from './responsive/template-expand/template-expand.component';
import { HeaderExtraComponent } from './header/header-extra/header-extra.component';
import { HeaderTemplateComponent } from './header/header-template/header-template.component';
import { TemplateComponent } from './cell/template/template.component';
import {AppRoutingModule} from './app.routing';
import { CustomIconExpandComponent } from './responsive/custom-icon-expand/custom-icon-expand.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MDataTableModule.forRoot(), AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SimpleComponent, DefaultComponent, TemplateExpandComponent, HeaderExtraComponent, HeaderTemplateComponent, TemplateComponent, CustomIconExpandComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
