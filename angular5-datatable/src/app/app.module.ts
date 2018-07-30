import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importing Datatable
import {DataTablesModule} from 'angular-datatables';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
