import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent], // Declare your component here.
      providers: [
        {
          provide: ActivatedRoute, // Provide a mock for ActivatedRoute.
          useValue: {
            // For example, provide a mock 'params' Observable if the component is subscribing to it.
            params: of({ /* mock object here */ }),
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
