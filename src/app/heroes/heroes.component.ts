import { HeroServiceService } from '../services/hero-service.service';
import { Hero } from '../hero/hero';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[];
  constructor(
    private heroService:HeroServiceService,
    private router: Router
  ){}
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  public ngOnInit(): void {
      this.heroService.getHeroes()
        .then(heroes=>this.heroes = heroes);
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
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void{
    this.heroService.delete(hero.id)
      .then(()=>{
        this.heroes = this.heroes.filter(h=>h !== hero);
        if (this.selectedHero === hero)
          this.selectedHero = null;
      });
  }


}
