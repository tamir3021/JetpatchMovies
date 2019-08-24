import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/Movie';

@Component({
  selector: 'movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {
  @Input() movie: Movie;
  @Input() masterBgColor: string;
  overrideBgColor: string = '';
  pickerColor: string;

  constructor() { }

  ngOnInit() {
    this.pickerColor = this.masterBgColor;
  }

  updateOverrideBgColor(color:string) {
    this.overrideBgColor = color;
  }

}
