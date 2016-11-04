import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { WebdevComponent } from './webdev/webdev.component';
import {CookingComponent} from './cooking/cooking.component';
import {MusicComponent} from './music/music.component';

const routes : Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    { 
        path: 'web', component: WebdevComponent
    },
    { 
        path: 'cooking', component: CookingComponent
    },
    { 
        path: 'music', component: MusicComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
]

export const routing = RouterModule.forRoot(routes);