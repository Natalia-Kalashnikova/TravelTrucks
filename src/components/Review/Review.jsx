import ReviewerRating from '../ReviewerRating/ReviewerRating.jsx';
import css from './Review.module.css';

const Review =({data})=>{
    return(
        <>
        {data ? (
            <div className={css.reviwerContainer}>
                <div className={css.reviwerWrapper}>
                    <div className={css.avatar}>{data.reviewer_name.charAt(0).toUpperCase()}</div>
                    <div className={css.reviewer}>
                        <p className={css.reviewerName}>{data.reviewer_name}</p>
                        <ReviewerRating count={data.reviewer_rating} />
                    </div>
                </div>
                <p className={css.comment}>{data.comment}</p>
            </div>
        ) : null}
        </>
    );}

export default Review;