import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animations } from './dashboard.animations';
import { HttpModule } from '@angular/http';
import { HeroServiceService } from './../services/hero-service.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpModule, BrowserAnimationsModule],
      providers:[ HeroServiceService],
      schemas:[NO_ERRORS_SCHEMA]
    })
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(HeroServiceService);
    let spy = spyOn(service, 'getHeroes').and.returnValue(Promise.resolve([{name:'Testy', id:1}]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain 1 hero',async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(component.heroes.length).toEqual(1);
    });    
  }));
});
