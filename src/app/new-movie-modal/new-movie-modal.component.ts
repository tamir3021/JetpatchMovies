import { Movie } from './../interfaces/Movie';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.scss']
})
export class NewMovieModalComponent implements OnInit {
  movie: Movie = {
    name: '',
    link: ''
  }

  constructor(public dialogRef: MatDialogRef<NewMovieModalComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

}
