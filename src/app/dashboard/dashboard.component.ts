import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../hero/hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService:HeroServiceService) { }

  ngOnInit():void {
    this.heroService.getHeroes()
      .then(heroes=>this.heroes = heroes.slice(1,5));
  }

}
