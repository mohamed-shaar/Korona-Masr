import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { NumbersComponent } from './numbers/numbers.component';
import { newsComponent } from './news/news.component';



const routes: Routes=[
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path :'news', component: newsComponent},
  {path :'numbers', component: NumbersComponent },
  {path :'hospitals', component: HospitalsComponent },
];

@NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
})
export class AppRoutingModule { }
