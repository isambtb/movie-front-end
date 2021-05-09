import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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
  constructor() { }

  ngOnInit(): void {
  }

  public onOffsetChange(event: PageEvent): void {
    console.log(event);
  }
}
