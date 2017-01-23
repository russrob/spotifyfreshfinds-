import { Component } from '@angular/core';
import {SpotifyServices } from '../service/spotify.services';

@Component({
	moduleId: module.id,
  selector: 'searchs',
  templateUrl: 'searchs.component.html',
})
export class SearchsComponent  { 
		searchStr:string;

		searchMusic(){
			console.log(this.searchStr);

		}
 }
