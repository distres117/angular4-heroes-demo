import { RouterLinkStub } from './../utils/test.helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animations } from './dashboard.animations';
import { HttpModule } from '@angular/http';
import { HeroServiceService } from './../services/hero-service.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: RouterLinkStub[];

  

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent],
      imports:[HttpModule, BrowserAnimationsModule, RouterTestingModule],
      providers:[ HeroServiceService],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(HeroServiceService);
    let spy = spyOn(service, 'getHeroes').and.returnValue(Promise.resolve([{name:'Testy', id:1}]));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain 1 hero',()=>{
    expect(component.heroes.length).toEqual(1);    
  });
  it('should render a valid route', ()=>{
    let button = fixture.debugElement.queryAll(By.css('a'));
    expect(button[0].properties['href']).toEqual('/details/1');
    
  });
});
