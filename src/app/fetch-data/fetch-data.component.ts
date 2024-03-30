import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { environment } from '../../environments/environment';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})


// export class FetchDataComponent implements OnInit{
//   public forecasts?: WeatherForecast[];
//   baseUrl = "https://localhost:40443/";
//   constructor(http: HttpClient) {
//     ngOnInit() {
//       this.getForecasts();
//     }
//     http.get<WeatherForecast[]>(environment.baseUrl + 'api/weatherforecast').subscribe(result => {
//       this.forecasts = result;
//     }, error => console.error(error));
//   }
// }

export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  baseUrl = "https://localhost:40443/";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>(this.baseUrl + 'api/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}



