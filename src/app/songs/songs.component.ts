import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Song } from './song';
// @Component({
//   selector: 'app-songs',
//   templateUrl: './songs.component.html',
//   styleUrl: './songs.component.css'
// })

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
// export class SongsComponent implements OnInit {
//   public songs!: Song[];
//   constructor(private http: HttpClient) {
//   }
//   ngOnInit() {
//     this.http.get<Song[]>(environment.baseUrl + 'api/Songs')
//       .subscribe(result => {
//         this.songs = result;
//       }, error => console.error(error));
//   }
// }
export class SongsComponent implements OnInit {
  public songs: Song[] = [];

  //baseUrl = "https://localhost:40443/";
  //baseUrl = "http://localhost:40080/";
  baseUrl = "http://ec2-3-101-36-35.us-west-1.compute.amazonaws.com/";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.http.get<Song[]>(this.baseUrl + 'api/Songs').subscribe(
      (result) => {
        this.songs = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}