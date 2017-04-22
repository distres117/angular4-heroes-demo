import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../hero/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[];
  constructor(private heroService:HeroServiceService){}
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  public ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes=>this.heroes = heroes);
  }


}
