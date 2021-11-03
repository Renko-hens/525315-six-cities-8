import { ChangeEvent, useState } from 'react';
import { ReviewsRadioEventType, ReviewsTextAreaEventType, ReviewsFormState } from '../../types/reviews-form';

const ratingStars = [
  {
    id: '5-stars',
    value: '5',
    title: 'perfect',
  },
  {
    id: '4-stars',
    value: '4',
    title: 'good',
  },
  {
    id: '3-stars',
    value: '3',
    title: 'not bad',
  },
  {
    id: '2-stars',
    value: '2',
    title: 'badly',
  },
  {
    id: '1-stars',
    value: '1',
    title: 'terribly',
  },
];

function ReviewsForm(): JSX.Element {
  const [reviewsInputs, setReviewsInputs] = useState<ReviewsFormState>({
    rating: {
      id: '',
      value: '',
    },
    review: '',
  });

  const handleInputRadioChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { id, value }: ReviewsRadioEventType = evt.target;

    setReviewsInputs({
      ...reviewsInputs,
      rating: {
        id,
        value,
      },
    });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value }: ReviewsTextAreaEventType = evt.target;

    setReviewsInputs({
      ...reviewsInputs,
      review: value,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              id={star.id}
              name="rating"
              type="radio"
              value={star.value}
              onChange={handleInputRadioChange}
            />
            <label htmlFor={star.id} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewsInputs.review}
        onChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
