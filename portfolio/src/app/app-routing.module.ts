import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { WebdevComponent } from './webdev/webdev.component';

const routes : Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"about", component: AboutComponent
    },
    { 
        path: 'web', component: WebdevComponent
    },
    {
        path:"404", component: PageNotFoundComponent
    },
    { 
        path: '**', redirectTo: "404"
    }
]

export const routing = RouterModule.forRoot(routes);