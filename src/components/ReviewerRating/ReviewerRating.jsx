import sprite from "../../images/icon.svg";
import css from './ReviewerRating.css';

const ReviewerRating =(count)=>{
    const totalStar = 5;

    const stars = Array.from({length: totalStar}, (_, index) =>{
        return index < count ? 
        (<div>
            <svg className={css.iconRatingActiv}>
            <use xlinkHref={`${sprite}#icon-rating`}></use>
            </svg>
        </div>
        ) : (
         <div>
            <svg className={css.iconRating}>
            <use xlinkHref={`${sprite}#icon-rating`}></use>
            </svg>
         </div>   
        ) 
    });

    return <div className={css.ratingContainer}>{stars}</div>;
}

export default ReviewerRating;