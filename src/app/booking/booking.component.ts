import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  isCity: boolean;
  citytName: string;
  today = new Date().toJSON().split('T')[0];
  constructor() { }

  ngOnInit() {}
  showCityBlock = (citytName: string) => {
    this.citytName = citytName;
    this.isCity = !this.isCity;
  }
}
