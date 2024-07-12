import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MovieModel, MovieSummaryModel} from "../models/movie.model";

@Injectable({
  providedIn: 'root'

})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovie(id: string): Observable<MovieModel> {
    return this.httpClient.get<MovieModel>(`/movies/${id}`);
  }

  getMovies(): Observable<MovieSummaryModel[]> {
    return this.httpClient.get<MovieSummaryModel[]>(`/movies`);
  }
}
