import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SongsComponent } from './songs/songs.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistSongsComponent } from './playlists/playlist-songs.component';
import { LoginComponent } from './auth/login.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch : 'full' },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'songs', component: SongsComponent},
    { path: 'playlists', component: PlaylistsComponent},
    { path: 'playlistSongs/:id', component: PlaylistSongsComponent},
    { path: 'login', component: LoginComponent}
];
