import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HospitalsComponent} from './hospitals/hospitals.component';
import {NumbersComponent} from './numbers/numbers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {newsComponent} from './news/news.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DataTableComponent} from './data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HospitalsComponent,
    NumbersComponent,
    newsComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase, 'korona-masr'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
