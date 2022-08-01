import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RatingsComponent, RatingComponent, AverageRatingComponent, RatingsListComponent } from './components/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeDislikeComponent,
    AutocompleteInputComponent,
    RatingsComponent,
    RatingComponent,
    AverageRatingComponent,
    RatingsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }