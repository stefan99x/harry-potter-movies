export type MovieModel = MovieSummaryModel & {
  box_office: string;
  cinematographers: string[];
  poster: string | null;
  producers: string[];
  summary: string;
}

export type MovieSummaryModel = {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
}
