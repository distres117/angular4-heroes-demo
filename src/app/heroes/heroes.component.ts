import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../hero/hero';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from './heroes.animations';
import { stagger } from '../utils/animation.helpers';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations:[animations]
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[] = [];
  constructor(
    private heroService:HeroServiceService,
    private router: Router
  ){}
  onSelect(hero:Hero):void{
    if (this.selectedHero)
      this.selectedHero.state = undefined;
    this.selectedHero = hero;
    this.selectedHero.state = 'active';
  }

  public ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes=>{
          stagger(this.heroes, heroes,40);
        });
  }
  goToDetail(){
    this.router.navigate(['/details', this.selectedHero.id]);
  }
  add(heroName:string): void{
    heroName = heroName.trim();
    if (!heroName) return;
    this.heroService.create(heroName)
      .then(hero=>{
        this.heroes.push(hero);
        this.selectedHero.state = undefined;
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h=>h !== hero);
    this.heroService.delete(hero.id)
      .then(()=>{
        if (this.selectedHero === hero)
          this.selectedHero.state = undefined;
          this.selectedHero = null;
      });
  }


}
