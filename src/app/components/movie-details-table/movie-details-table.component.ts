import {Component, input, InputSignal} from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MinutesToHoursPipe} from "../../Pipes/minutes-to-hours.pipe";

@Component({
  selector: 'app-movie-details-table',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    MinutesToHoursPipe
  ],
  templateUrl: './movie-details-table.component.html',
  styleUrl: './movie-details-table.component.css'
})
export class MovieDetailsTableComponent {
  public movie: InputSignal<MovieModel> = input.required<MovieModel>();
}
