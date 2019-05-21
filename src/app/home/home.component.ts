import { Component, OnInit } from '@angular/core';

// Servicios datos dummy
import { DatosDummyService } from '../services/datos-dummy.service';

// Time Ago librería npm install timeago.js
//import { format, render, cancel, register } from 'timeago.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _datosDummy: DatosDummyService) { }

  timeSince(date: number): string {
    // Funcion para crear la fecha time ago
    if (typeof date === "string"){
      var dateNumber: number = parseInt(date)
    } else {
      dateNumber = date;
    }
  var ahorita: number = new Date().getTime();
  var seconds: number = Math.floor((ahorita - dateNumber) / 1000);
  var interval: number = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

ngOnInit() {
}

}
