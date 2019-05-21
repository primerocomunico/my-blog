import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

// Servicios datos dummy
import { DatosDummyService } from './services/datos-dummy.service';

// Routing
import { Routes, RouterModule } from '@angular/router';

// Rutas URL
const misRutas: Routes = [
  { 'path': 'home', 'component': HomeComponent },
  { 'path': 'post/:id', 'component': DetailComponent},
  { 'path': ' ', 'component': HomeComponent },
  { 'path': '**', 'component': HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [DatosDummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
