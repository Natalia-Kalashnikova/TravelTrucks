import { useSelector } from "react-redux";
import css from './TruckDetails.module.css';
import {selectTruck} from '../../redux/catalog/selectors.js';
import { useState } from "react";
import TruckMainInfo from '../TruckMainInfo/TruckMainInfo.jsx';
import TruckReviews from '../TruckReviews/TruckReviews.jsx';
import Form from '../Form/Form.jsx';

const TruckDetails =()=>{
    const [isLinkActive, setIsLinkActive] = useState('features');
    const data = useSelector(selectTruck);
    return(
        <>
        {data ? (
            <div className={css.truckDetailsContainer}>
                <p className={css.truckDescription}>{data.description}</p>
                <div className={css.info}>
                    <div className={css.links}>
                        <span className={css.features} onClick={()=> setIsLinkActive('features')}>
                        Features
                        </span>
                        <span className={css.reviews} onClick={()=> setIsLinkActive('reviews')}>
                        Reviews
                        </span>
                        <div className={
                            isLinkActive === 'features'
                            ? css.underlineRight
                            : css.underlineLeft
                        }>
                        </div>
                    </div>
                </div>
                <div className={css.infoWrapper}>
                    <div className={css.detalReviews}>
                        {isLinkActive === 'features' ? <TruckMainInfo /> : <TruckReviews />}
                    </div>
                    <Form />
                </div>
            </div>         
        ) : null}
        </>
    );
}

export default TruckDetails;