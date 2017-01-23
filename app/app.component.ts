import { Component } from '@angular/core';
import {SpotifyServices} from './components/service/spotify.services'

@Component({
	moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [SpotifyServices]
})
export class AppComponent  { name = 'Angular'; }
