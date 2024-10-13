import sprite from "../../images/icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from '../../redux/filter/selectors.js';
import { setLocation } from '../../redux/filter/slice.js';
import css from './LocationFilter.module.css';


const LocationFilter =()=> {
    const dispatch = useDispatch();
    const location = useSelector(selectLocation);
    
    function handleEnterLocation(e) {
        const value = e.target.value.trim();
        dispatch(setLocation(value));
    }

    return(
        <div className={css.location}>
            <label htmlFor="location" className={css.label}>
                Location
            </label>
            <input 
                className={css.locationInput} 
                type="text" 
                id="location" 
                placeholder="City" 
                onChange={handleEnterLocation} 
                value={location} 
            />
            <div className={css.locationWrapper}>
                {location ? (
                    <div >
                        <svg className={css.locationActiveIcon}>
                            <use xlinkHref={`${sprite}#icon-map`}></use>
                        </svg>
                    </div>                    
                ) : (
                    <div >
                        <svg className={css.locationIcon}>
                        <use xlinkHref={`${sprite}#icon-map`}></use>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LocationFilter;