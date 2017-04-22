import { RequestOptionsArgs } from '@angular/http/src';
import { toPromise } from 'rxjs/operator/toPromise';
import { Http, Headers } from '@angular/http';
import { Hero } from '../hero/hero';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroServiceService {
  heroes:Hero[];
  private heroesUrl:string = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(res=>res.json().data as Hero[])
      .catch(this.handleError);
  }
  handleError(res:any):Promise<any>{
    console.error('An error occurred:', res);
    return Promise.reject(res.message || res);
  }
  getHero(id:number):Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res=> res.json().data as Hero)
      .catch(this.handleError);
  }
  update(hero:Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers:this.headers})
      .toPromise()
      .then(()=>hero)
      .catch(this.handleError)
  }
  create(name:string): Promise<Hero>{
    return this.http
      .post(this.heroesUrl,JSON.stringify({name}),{headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }
  delete(id:number): Promise<void>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(()=>null)
    .catch(this.handleError);
  }

}
