import { Component, ViewChild, ElementRef } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { WeatherService } from '../services/weather.service';
Chart.register(...registerables);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  @ViewChild('temperatureMaxChart')
  temperatureMaxChart!: ElementRef;
  
  constructor(private weatherService: WeatherService) { }

 

  ngOnInit() {
   /* this.http.get<WeatherData>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/241912?apikey=PIAcz5bZ3LStSpLy1GsG10hXdqdQcSD3`)
    .subscribe(data => {
      const tempMaxArray = data.DailyForecasts.map(forecast => forecast.Temperature.Maximum.Value);
      this.createLineChart(tempMaxArray);
    });*/

    const weatherData = this.weatherService.GetInfo();
    weatherData.subscribe(data => {
      const tempMaxArray = data.DailyForecasts.map(forecast => forecast.Temperature.Maximum.Value);
      this.createLineChart(tempMaxArray);
    });
  }
  
  createLineChart(tempMaxArray: number[]) {
    let ctx = this.temperatureMaxChart.nativeElement.getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
        datasets: [{
          label: 'Temperature (Celsius)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: tempMaxArray
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero:true
            
            
          }
        }
      }
    });
  }
}
