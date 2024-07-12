import {Component, input, InputSignal} from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-movie-details-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './movie-details-table.component.html',
  styleUrl: './movie-details-table.component.css'
})
export class MovieDetailsTableComponent {
  public movie: InputSignal<MovieModel> = input.required<MovieModel>();
}
