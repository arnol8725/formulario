import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TemplateComponent } from './componets/template/template.component';
import { DataComponent } from './componets/data/data.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
