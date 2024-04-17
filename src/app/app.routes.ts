import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SongsComponent } from './songs/songs.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch : 'full' },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'songs', component: SongsComponent}
];
