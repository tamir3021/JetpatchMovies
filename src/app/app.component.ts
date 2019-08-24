import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Movie } from './interfaces/Movie';
import { NewMovieModalComponent } from './new-movie-modal/new-movie-modal.component';
import { MovieContainer } from './interfaces/MovieContainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jetpatch-assignment';
  movies: MovieContainer[] = [];
  masterBackgroundColor: string;

  constructor(public dialog: MatDialog) {

  }

  addMovie () {
    const dialogRef = this.dialog.open(NewMovieModalComponent, {width: '50%'});
    dialogRef.afterClosed()
      .subscribe((movieData: Movie) => {
        if(movieData && movieData.name) {
          this.movies.push({
            name: movieData.name,
            link: movieData.link,
            overrideBgColor: this.masterBackgroundColor
          });
          console.log(this.movies);
        }
      });
  }

  editMasterBackgroundColor() {

  }
}
