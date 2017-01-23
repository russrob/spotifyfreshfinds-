import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchsComponent }  from './components/searchs/searchs.component';

import{routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule, HttpModule ],
  declarations: [ AppComponent, SearchsComponent, AboutComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
