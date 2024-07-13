import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MoviesListComponent} from './movies-list.component';
import {FormsModule} from "@angular/forms";
import {MoviesService} from "../../services/movies.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of, Subscription} from "rxjs";
import {MovieSummaryModel} from "../../models/movie.model";
import {DEFAULT_MOVIE_SUMMARY} from "../../constants/movie-constants";
import {RouterTestingModule} from "@angular/router/testing";

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
    expect((component as any).movies()).toEqual([]);

    component.ngOnInit();

    expect((component as any).movies()).toEqual(testMovie);

    done();
  });

  it('should cleanup subscriptions onDestroy', () => {
    component.ngOnInit(); // create subscriptions
    component.ngOnDestroy(); // cleanup
    expect((component as any).subscriptions.every((sub: Subscription) => sub.closed)).toBeTrue();
  });

  it("should return all movies when no filter applied", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    const testMovie: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(testMovie);
    expect((component as any).movies()).toEqual([]);

    component.ngOnInit();

    expect((component as any).displayedMovies()).toEqual(movies);
  });

  it("should return correct movies when filter by title", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(movies);
    expect((component as any).movies()).toEqual([]);

    component.ngOnInit();

    (component as any).filterTitle.set(DEFAULT_MOVIE_SUMMARY.title);
    fixture.detectChanges();

    expect((component as any).movies()).toEqual([movies[0]]);
  });

  it("should return correct movies when filter by release date", () => {
    const movies: MovieSummaryModel[] = [
      DEFAULT_MOVIE_SUMMARY
    ];

    mockMoviesService.getMovies = () => of(movies);
    expect((component as any).movies()).toEqual([]);

    component.ngOnInit();

    (component as any).filterReleaseDate.set(DEFAULT_MOVIE_SUMMARY.release_date);
    fixture.detectChanges();

    expect((component as any).displayedMovies()).toEqual([movies[0]]);
  });
});
