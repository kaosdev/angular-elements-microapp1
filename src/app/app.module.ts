import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MicroApp1Component } from './micro-app1/micro-app1.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [
    MicroApp1Component,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'microapp1/page1', component: Page1Component },
      { path: 'microapp1/page2', component: Page2Component }
    ], { useHash: true }),
    HotTableModule.forRoot()
  ],
  entryComponents: [MicroApp1Component]
})
export class AppModule {
  constructor(private inj: Injector) {
  }

  ngDoBootstrap() {
    const customApp = createCustomElement(MicroApp1Component, { injector: this.inj });
    customElements.define('micro-app1', customApp);
  }
}
