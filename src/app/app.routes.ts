import { Routes } from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

export const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
];
