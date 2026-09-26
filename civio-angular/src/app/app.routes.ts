import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { ModulePageComponent } from './pages/module-page/module-page';
import { CongressPageComponent } from './pages/congress-page/congress-page';
import { LawFormComponent } from './pages/law-form/law-form';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'inicio' },
	{ path: 'inicio', component: HomePageComponent },
	{ path: 'salud', component: ModulePageComponent, data: { section: 'salud' } },
	{ path: 'economia', component: ModulePageComponent, data: { section: 'economia' } },
	{ path: 'ambiente', component: ModulePageComponent, data: { section: 'ambiente' } },
	{ path: 'elecciones', component: ModulePageComponent, data: { section: 'elecciones' } },
	{ path: 'congreso', component: CongressPageComponent },
	{ path: 'nueva-iniciativa', component: LawFormComponent },
	{ path: '**', redirectTo: 'inicio' }
];
