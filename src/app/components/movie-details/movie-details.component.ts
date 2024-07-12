import {Component, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MovieModel} from "../../models/movie.model";
import {Subscription} from "rxjs";
import {DEFAULT_MOVIE} from "../../constants/movie-constants";
import {MovieDetailsTableComponent} from "../movie-details-table/movie-details-table.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    RouterLink,
    MovieDetailsTableComponent,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  protected movieDetail: WritableSignal<MovieModel> = signal(DEFAULT_MOVIE);

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    let movieId = this.route.snapshot.params['id'];

    const subscription: Subscription = this.moviesService.getMovie(movieId)
      .subscribe(movie => {
        this.movieDetail.set(movie);
        this.movieDetail.asReadonly();
      });

    this.subscriptions.push(subscription);
  }
}
