import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
 
    ToolbarModule,
    ButtonModule,
    FormsModule  , 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
