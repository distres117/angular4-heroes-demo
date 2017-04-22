import { ValueProvider, OnInit } from '@angular/core/core';
import { HeroServiceService } from './services/hero-service.service';
import { Hero } from './hero/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title:string = 'Tour of Heroes';
}
