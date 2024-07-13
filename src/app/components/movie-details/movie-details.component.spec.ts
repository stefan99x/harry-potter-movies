import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';

import { MovieDetailsComponent } from './movie-details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // Declare your component here.
      imports:[HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute, // Provide a mock for ActivatedRoute.
          useValue: {
            snapshot: {
              params: {
                id: 'mock-id'
              }
            },
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
