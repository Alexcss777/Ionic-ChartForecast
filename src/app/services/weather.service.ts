import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../home/weather-data.interface';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  GetInfo(){

   return this.http.get<WeatherData>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/241912?apikey=PIAcz5bZ3LStSpLy1GsG10hXdqdQcSD3`);
      
    /*.subscribe(data => {
      const tempMaxArray = data.DailyForecasts.map(forecast => forecast.Temperature.Maximum.Value);
      this.createLineChart(tempMaxArray);
    });*/
  }
}
