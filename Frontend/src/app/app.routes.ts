import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Technologies } from './pages/technologies/technologies';
import { Technology } from './pages/technology/technology';
import { Search } from './pages/search/search';

export const routes: Routes = [
    {path: 'home', component: Home },
    /*{
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'technologies',
        loadComponent: () => import('./pages/technologies/technologies').then(m => m.Technologies)
    },
    {
        path: 'technology/:id',
        loadComponent: () => import('./pages/technology/technology').then(m => m.Technology)
    },
    {
        path: 'search/:query', component: Search
    },*/
    {
        path: 'about',
        component: About
    },
    {
        path: 'technologies',
        component: Technologies
    },
    {
        path: 'technology/:id',
        component: Technology
    },
    {
        path: 'search/:query', component: Search
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "home"
    }
];
