import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { AllMoviesComponent } from "./all-movies/all-movies.component";

const routes: Routes = [
  {
    path : ':movie_id',
    component:MovieDetailsComponent
  },
  {
    path : '',
    component:AllMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
