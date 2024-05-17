import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Playlist } from './playlist';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})

export class PlaylistsComponent implements OnInit {
  public playlists: Playlist[] = [];

  //baseUrl = "https://localhost:40443/";
  //baseUrl = "http://localhost:40080/";
  baseUrl = "http://ec2-3-101-36-35.us-west-1.compute.amazonaws.com/";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists() {
    this.http.get<Playlist[]>(this.baseUrl + 'api/Playlists').subscribe(
      (result) => {
        this.playlists = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}