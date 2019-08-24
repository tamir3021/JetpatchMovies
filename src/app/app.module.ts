//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material modules
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

//Other packages
import { ColorPickerModule } from 'ngx-color-picker';

//App components
import { AppComponent } from './app.component';
import { NewMovieModalComponent } from './new-movie-modal/new-movie-modal.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMovieModalComponent,
    MovieContainerComponent,
    
  ],
  entryComponents: [
    NewMovieModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
