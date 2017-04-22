import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule,Routes } from '@angular/router';
const routes: Routes = [
    { path: 'heroes', component: HeroesComponent},
    { path: 'dashboard',component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch:'full'},
    { path: 'details/:id', component: HeroComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}