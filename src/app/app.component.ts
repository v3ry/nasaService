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
  imgOfTheDay: string = '';

  constructor(public nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((data: string) => {
      this.imgOfTheDay = data;
      console.log(this.imgOfTheDay);
      console.log(typeof this.imgOfTheDay);
      // this.imgOfTheDay = data.url;
      // this.imgOfTheDay = data;
      // console.log(this.imgOfTheDay);
    });
  }
}
