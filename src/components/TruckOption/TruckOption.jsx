import css from './TruckOption.module.css';
import sprite from "../../images/icon.svg";

const TruckOption=({data})=>{
    return(
        <div className={css.truckOptionContainer}>
            {data.transmission === 'automatic' ? (
                <div className={css.optionItem}>
                    <svg>
                        <use xlinkHref={`${sprite}#icon-diagram`}></use>
                    </svg>
                    <p className={css.optionText}>Automatic</p>
                </div>
            ) : (
                <div className={css.optionItem}>
                    <svg>
                        <use xlinkHref={`${sprite}#icon-diagram`}></use>
                    </svg>
                    <p className={css.optionText}>Manual</p>
                </div>
            )}
            {data.AC ? (
                <div className={css.optionItem}>
                    <svg>
                        <use xlinkHref={`${sprite}#icon-wind`}></use>                        
                    </svg>
                    <p className={css.optionText}>AC</p>
                </div>
            ) : null}
            {data.gas ? (
                <div>
                    <svg>
                        <use xlinkHref={`${sprite}#icon-fuel-pump`}></use>
                    </svg>                   
                </div>
            ) : null}
        </div>
    )
}

export default TruckOption;