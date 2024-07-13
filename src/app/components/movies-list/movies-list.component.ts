import {Component, computed, OnDestroy, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {Subscription} from "rxjs";
import {MovieSummaryModel} from "../../models/movie.model";
import {MoviesService} from "../../services/movies.service";
import {NgForOf} from "@angular/common";
import {MovieSummaryItemComponent} from "../movie-summary-item/movie-summary-item.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    NgForOf,
    MovieSummaryItemComponent,
    FormsModule,
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit, OnDestroy {
  protected subscriptions: Subscription[] = [];

  protected filterTitle: WritableSignal<string> = signal<string>("");
  protected filterReleaseDate: WritableSignal<string> = signal<string>("");

  protected movies: WritableSignal<MovieSummaryModel[]> = signal([]);

  protected displayedMovies: Signal<MovieSummaryModel[]> = computed(() => {
    return this.movies().filter(movie =>
      movie.title.toLowerCase().includes(this.filterTitle().toLowerCase()) &&
      movie.release_date.includes(this.filterReleaseDate())
    );
  });

  constructor(private moviesService: MoviesService) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const subscription: Subscription = this.moviesService.getMovies()
      .subscribe((movies: MovieSummaryModel[]): void => {
        this.movies.set(movies);
        this.movies.asReadonly();
      });

    this.subscriptions.push(subscription);
  }

  protected identify(_: number, item: MovieSummaryModel): string {
    return item.id;
  }
}
