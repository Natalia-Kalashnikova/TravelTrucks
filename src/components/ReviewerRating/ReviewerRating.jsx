import sprite from "../../images/icon.svg"; 
import css from './ReviewerRating.module.css';

const ReviewerRating = ({ count }) => {
    const totalStar = 5;

    const stars = Array.from({ length: totalStar }, (_, index) => {
        return index < count ? (
            <svg className={css.iconRatingActive} key={index}>
                <use xlinkHref={`${sprite}#icon-rating`}></use>
            </svg>
        ) : (
            <svg className={css.iconRating} key={index}>
                <use xlinkHref={`${sprite}#icon-rating`}></use>
            </svg>
        );
    });

    return <div className={css.ratingContainer}>{stars}</div>;
};

export default ReviewerRating;