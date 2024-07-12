import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import {MovieSummaryItemComponent} from "../movie-summary-item/movie-summary-item.component";
import {FormsModule} from "@angular/forms";
import {MoviesService} from "../../services/movies.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [MoviesListComponent, MovieSummaryItemComponent],
      providers: [MoviesService],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
