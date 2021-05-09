import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { FilmApiService } from 'src/app/wrapper/modules/dashboard/services/film.service';


@NgModule({
  declarations: [
    DashboardComponent,
    FilmItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  providers: [
    FilmApiService,
  ]
})
export class DashboardModule { }
