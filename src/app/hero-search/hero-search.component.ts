import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { Observable, Subject } from 'rxjs/Rx';
import { HeroSearchService } from '../services/hero-search.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers:[HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }
  search(term:string){
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.heroes = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term=>term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
        .catch(err=>{
          console.log(err);
          return Observable.of<Hero[]>([]);
        });
  }
  goToDetail(hero:Hero): void{
    let link = ['/details', hero.id];
    this.router.navigate(link);
  }

}
