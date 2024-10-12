import sprite from "../../images/icon.svg";
import css from './LocationFilter.module.css';
import { useDispatch, useSelector } from "react-redux";
import {selectLocation} from '../../redux/filter/selectors.js';
import {setLocation} from '../../redux/filter/slice.js';

const LocationFilter=()=>{
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
                    <div className={css.locationActivIcon}>
                        <svg>
                            <use xlinkHref={`${sprite}#icon-map`}></use>
                        </svg>
                    </div>                    
                ) : (
                    <div className={css.locationIcon}>
                        <svg>
                        <use xlinkHref={`${sprite}#icon-map`}></use>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LocationFilter;