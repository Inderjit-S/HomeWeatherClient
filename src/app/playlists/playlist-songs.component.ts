import { Component } from '@angular/core';
import { Song } from './song';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-playlist-songs',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './playlist-songs.component.html',
  styleUrl: './playlist-songs.component.css'
})
export class PlaylistSongsComponent {

  public songs: Song[] = [];
  public displayedColumns : string[] = ["id", "title", "artist","genre"];
  id: number;
  baseUrl = "https://localhost:40443/";
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {this.id = -1}

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    let idparam = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idparam ? +idparam : -1;
    //this.http.get<Song[]>(`${environment.baseUrl}api/Playlists/playlistSongs/${this.id}`).subscribe( /* check if the api url is correct */
    this.http.get<Song[]>(`${this.baseUrl}api/Playlists/playlistSongs/${this.id}`).subscribe(
      {
        next: result => this.songs = result,
        error:error => console.error(error)
      }
    );
  }
}
