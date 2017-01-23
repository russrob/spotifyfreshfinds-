import  {ModuleWithProviders} from '@angular/core';
import  {Routes, RouterModule} from '@angular/router';

import {SearchsComponent} from './components/searchs/searchs.component';
import {AboutComponent} from './components/about/about.component';


const appRoutes: Routes = [
	{
		path:'',
		component: SearchsComponent
	},

	{
		path: 'about',
		component: AboutComponent
	}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);