import {MovieSummaryItemComponent} from './movie-summary-item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('MovieSummaryItemComponent', () => {
  let component: MovieSummaryItemComponent;
  let fixture: ComponentFixture<MovieSummaryItemComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieSummaryItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSummaryItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });


});
