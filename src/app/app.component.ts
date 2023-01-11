import { Component, OnInit } from '@angular/core';
import { Nasa } from './nasa.interface';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nasa';
  currentData!: Nasa;
  // public imgOfTheDay: string =
  //   'https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg';
  public imgOfTheDay: string =
    'https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg';

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((data: string) => {
      // this.imgOfTheDay = data;
      console.log(this.currentData);
      // this.imgOfTheDay = data.url;
      // this.imgOfTheDay = data;
      // console.log(this.imgOfTheDay);
    });
  }
}
