import {MovieSummaryItemComponent} from './movie-summary-item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {MinutesToHoursPipe} from "../../Pipes/minutes-to-hours.pipe";

describe('MovieSummaryItemComponent', () => {
  let component: MovieSummaryItemComponent;
  let fixture: ComponentFixture<MovieSummaryItemComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterLink,
        CurrencyPipe,
        MinutesToHoursPipe
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSummaryItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
