import { Component } from '@angular/core';
import {SpotifyServices } from '../service/spotify.services';
import {Artist } from '../../../Artist';

@Component({
	moduleId: module.id,
  selector: 'searchs',
  templateUrl: 'searchs.component.html',
})
export class SearchsComponent  { 
		searchStr:string;
		searchRes: Artist[];

		constructor(private _spotifyService:SpotifyServices){

		}

		searchMusic(){
			this._spotifyService.searchMusic(this.searchStr).subscribe(res =>{
				this.searchRes = res.artists.items;
							});

		}
 }
