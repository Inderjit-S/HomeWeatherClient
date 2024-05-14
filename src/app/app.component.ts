// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'MusicClient';
// }

// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   public forecasts?: WeatherForecast[];
//   constructor(http: HttpClient) {
//     http.get<WeatherForecast[]>('/api/weatherforecast').subscribe(result => {
//       this.forecasts = result;
//     }, error => console.error(error));
//   }
//   title = 'HealthCheck';
// }
// interface WeatherForecast {
//   date: string;
//   temperatureC: number;
//   temperatureF: number;
//   summary: string;
// }
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// interface WeatherForecast {
//   date: string;
//   temperatureC: number;
//   temperatureF: number;
//   summary: string;
// }
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   public forecasts: WeatherForecast[] = [];
//   constructor(private http: HttpClient) {}
//   ngOnInit() {
//     this.getForecasts();
//   }
//   getForecasts() {
//     this.http.get<WeatherForecast[]>('/api/weatherforecast').subscribe(
//       (result) => {
//         this.forecasts = result;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//   title = 'HealthCheck';
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomeComponent,NavMenuComponent]
})
export class AppComponent {
  title = 'MusicClient';

  // constructor(private authService: AuthService){}
  // ngOnInit(): void{
  //   this.authService.init();
  // }
}