import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchsComponent }  from './components/searchs/searchs.component';

import{routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule ],
  declarations: [ AppComponent, SearchsComponent, AboutComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
