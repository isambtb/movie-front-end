import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FilmApiService } from '../../services/film.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public films = [{ id: 1, name: "Shawshank redemption", rating: 9 }, { id: 2, name: "Hacksaw ridge", rating: 8 }];
  public pageSizeOptions: number[] = [25, 50, 75, 100];
  public pageSize: number = this.pageSizeOptions[0];
  public length: number = 1000;
  public pageIndex: number = 0;

  constructor(private filmApiService: FilmApiService) { }

  ngOnInit(): void {
    this.getAll(this.pageIndex, this.pageSize);
  }

  public onOffsetChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getAll(event.pageIndex, event.pageSize);
  }

  public getAll(page: number, size: number) {
    return this.filmApiService.getFilms({ page, size, sort: 'id' }).subscribe(
      (films) => this.films = films
    );;
  }
}
