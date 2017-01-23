import { Component } from '@angular/core';
import {SpotifyServices } from '../service/spotify.services';

@Component({
	moduleId: module.id,
  selector: 'searchs',
  templateUrl: 'searchs.component.html',
})
export class SearchsComponent  { 
		searchStr:string;

		constructor(private _spotifyService:SpotifyServices){

		}

		searchMusic(){
			this._spotifyService.searchMusic(this.searchStr).subscribe(res =>{
				console.log(res.artists.items);
							});

		}
 }
