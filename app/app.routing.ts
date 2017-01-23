import  {ModuleWithProviders} from '@angular/core';
import  {Routes, RouterModule} from '@angular/router';

import {SearchsComponent} from './components/searchs/searchs.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';


const appRoutes: Routes = [
	{
		path:'',
		component: SearchsComponent
	},

	{
		path: 'about',
		component: AboutComponent
	},

	{
		path: 'artist/:id',
		component:ArtistComponent 
	}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);