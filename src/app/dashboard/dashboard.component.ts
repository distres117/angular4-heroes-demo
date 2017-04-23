import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../hero/hero';
import { Component, OnInit } from '@angular/core';
import { animations } from './dashboard.animations';
import { stagger } from '../utils/animation.helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[animations]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService:HeroServiceService) { }

  ngOnInit():void {
    this.heroService.getHeroes()
      .then(heroes=> stagger(this.heroes,heroes.slice(1,5),100));
  }

}
