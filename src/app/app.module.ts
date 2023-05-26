import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/products-header/products-header.component';
import { FiltersComponent } from './pages/home/filters/filters.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
