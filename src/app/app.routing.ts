import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SimpleComponent} from './simple/simple.component';
import {HeaderExtraComponent} from './header/header-extra/header-extra.component';
import {HeaderTemplateComponent} from './header/header-template/header-template.component';
import {TemplateComponent} from './cell/template/template.component';
import {DefaultComponent} from './responsive/default/default.component';
import {TemplateExpandComponent} from './responsive/template-expand/template-expand.component';
import {CustomIconExpandComponent} from './responsive/custom-icon-expand/custom-icon-expand.component';

const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'header/header-template', component: HeaderTemplateComponent },
  { path: 'header/header-template-extra', component: HeaderExtraComponent },
  { path: 'cell/cell-template', component: TemplateComponent },
  { path: 'responsive/default', component: DefaultComponent },
  { path: 'responsive/template', component: TemplateExpandComponent },
  { path: 'responsive/custom-icon-expand', component: CustomIconExpandComponent },
  { path: '**', component: SimpleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {}

