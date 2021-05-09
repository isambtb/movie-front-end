import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from '../../models/film.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() public film: IFilm;

  constructor() { }

  ngOnInit(): void {
  }

}
