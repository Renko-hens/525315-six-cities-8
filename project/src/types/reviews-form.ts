export type Rating = {
  id: string,
  value: string,
};

export type ReviewsRadioEventType = {
  id: string,
  value: string,
}

export type ReviewsTextAreaEventType = {
  id: string,
  name: string,
  value: string,
  title: string,
}

export type ReviewsFormState = {
  rating: Rating,
  review: string,
};
