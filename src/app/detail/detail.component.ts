import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// Servicios datos dummy
import {DatosDummyService} from '../services/datos-dummy.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public _datosDummy: DatosDummyService, public _idRoute: ActivatedRoute) { }

  // variables para rutas dinámicas
  id: number;
  sub: any;

  ngOnInit() {
    this.sub = this._idRoute.params.subscribe((params) => {this.id = params['id']});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

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

}
