import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AgGridModule} from "ag-grid-angular/main";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";

import { AppComponent } from './app.component';
import { NestedTabsComponent, NestedTabComponent } from './my-grid-application/tabs/nested-tabs.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents() ],
  declarations: [ AppComponent, MyGridApplicationComponent,  NestedTabsComponent, NestedTabComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
