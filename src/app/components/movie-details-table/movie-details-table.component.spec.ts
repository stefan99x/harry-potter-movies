import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsTableComponent } from './movie-details-table.component';

describe('MovieDetailsTableComponent', () => {
  let component: MovieDetailsTableComponent;
  let fixture: ComponentFixture<MovieDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
