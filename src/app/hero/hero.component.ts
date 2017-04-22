import { HeroServiceService } from '../services/hero-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
      private heroService:HeroServiceService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params:Params)=> this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.heroService.update(this.hero)
      .then(()=>this.goBack());
  }

}
