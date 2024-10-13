import { useSelector } from "react-redux";
import {selectTruck } from '../../redux/catalog/selectors.js';
import Review from '../Review/Review.jsx';
import css from './TruckReviews.module.css';


const TruckReviews = () => {
    
    const data = useSelector(selectTruck);
    
    return(
        <>
           {data ? (
              <div className={css.truckReviewsContainer}>
                {data.reviews ? data.reviews.map((item, index)=>(
                    <Review data={item} key={index} />
                )) : null}
              </div>        
           ) : null}
        </>
    );
}

export default TruckReviews;