import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsTableComponent} from './movie-details-table.component';
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {MinutesToHoursPipe} from "../../Pipes/minutes-to-hours.pipe";
import {DEFAULT_MOVIE} from "../../constants/movie-constants";

describe('MovieDetailsTableComponent', () => {
  let component: MovieDetailsTableComponent;
  let fixture: ComponentFixture<MovieDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RouterLink,
        CurrencyPipe,
        MinutesToHoursPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('movie', DEFAULT_MOVIE);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
