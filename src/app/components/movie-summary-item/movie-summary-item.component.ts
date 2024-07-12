import {Component, input, InputSignal} from '@angular/core';
import {MovieSummaryModel} from "../../models/movie.model";
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {MinutesToHoursPipe} from "../../Pipes/minutes-to-hours.pipe";

@Component({
  selector: 'app-movie-summary-item',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    MinutesToHoursPipe
  ],
  templateUrl: './movie-summary-item.component.html',
  styleUrl: './movie-summary-item.component.css'
})
export class MovieSummaryItemComponent {
  movieSummary:InputSignal<MovieSummaryModel> = input.required<MovieSummaryModel>();
}
