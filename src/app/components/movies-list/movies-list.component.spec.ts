import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of, Subscription } from "rxjs";

import { MoviesListComponent } from './movies-list.component';
import { MoviesService } from "../../services/movies.service";
import { MovieSummaryModel } from "../../models/movie.model";
import { DEFAULT_MOVIE_SUMMARY } from "../../constants/movie-constants";

class MoviesListComponentSpec extends MoviesListComponent {
  public get testMovies() {
    return this.movies;
  }

  public get testSubscriptions() {
    return this.subscriptions;
  }

  public get testFilterTitle() {
    return this.filterTitle;
  }

  public get testFilterReleaseDate() {
    return this.filterReleaseDate;
  }

  public get testDisplayedMovies() {
    return this.displayedMovies;
  }
}

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let mockMoviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      providers: [MoviesService],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    mockMoviesService = TestBed.inject(MoviesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should call getMovies and subscribe to it', () => {
    const getMoviesSpy = spyOn(mockMoviesService, 'getMovies').and.callThrough();
    const subscribeSpy = spyOn(component['subscriptions'], 'push').and.callThrough();

    component.ngOnInit();

    expect(getMoviesSpy).toHaveBeenCalled();
    expect(subscribeSpy).toHaveBeenCalled();
  });

  it('ngOnInit should update movies', (done) => {
    const testMovie: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(testMovie);
    let testComponent = new MoviesListComponentSpec(mockMoviesService);

    expect(testComponent.testMovies()).toEqual([]);

    testComponent.ngOnInit();

    expect(testComponent.testMovies()).toEqual(testMovie);

    done();
  });

  it('should cleanup subscriptions onDestroy', () => {
    let testComponent: MoviesListComponentSpec = new MoviesListComponentSpec(mockMoviesService);

    testComponent.ngOnInit(); // create subscriptions
    testComponent.ngOnDestroy(); // cleanup
    expect(testComponent.testSubscriptions.every((sub: Subscription) => sub.closed)).toBeTrue();
  });

  it("should return all movies when no filter applied", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    const testMovie: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(testMovie);
    let testComponent: MoviesListComponentSpec = new MoviesListComponentSpec(mockMoviesService);

    expect(testComponent.testMovies()).toEqual([]);

    testComponent.ngOnInit();

    expect(testComponent.testDisplayedMovies()).toEqual(movies);
  });

  it("should return correct movies when filter by title", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(movies);
    let testComponent: MoviesListComponentSpec = new MoviesListComponentSpec(mockMoviesService);

    expect(testComponent.testMovies()).toEqual([]);

    testComponent.ngOnInit();

    testComponent.testFilterTitle.set(DEFAULT_MOVIE_SUMMARY.title);
    fixture.detectChanges();

    expect(testComponent.testMovies()).toEqual([movies[0]]);
  });

  it("should return correct movies when filter by release date", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(movies);
    let testComponent: MoviesListComponentSpec = new MoviesListComponentSpec(mockMoviesService);
    expect(testComponent.testMovies()).toEqual([]);

    testComponent.ngOnInit();

    testComponent.testFilterReleaseDate.set(DEFAULT_MOVIE_SUMMARY.release_date);
    fixture.detectChanges();

    expect(testComponent.testDisplayedMovies()).toEqual([movies[0]]);
  });
});
