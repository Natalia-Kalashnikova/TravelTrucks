import sprite from "../../images/icon.svg";
import css from './TruckOption.module.css';


const TruckOption = ({ data }) => {
    
    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return(
        <div className={css.truckOptionContainer}>
            {data.transmission ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-diagram`}></use>
                    </svg>
                    <p className={css.optionText}>{capitalizeFirstLetter(data.transmission)}</p>
                </div>
            ) : null} 
            
            {data.engine ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-fuel-pump`}></use>
                    </svg>
                    <p className={css.optionText}>{capitalizeFirstLetter(data.engine)}</p>
                </div>
            ) : null} 
            
            {data.AC ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-wind`}></use>
                    </svg>
                    <p className={css.optionText}>AC</p>
                </div>
            ) : null}

             {data.bathroom ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-bi-droplet`}></use>
                    </svg>
                    <p className={css.optionText}>Bathroom</p>
                </div>
            ) : null}

             {data.kitchen ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-cup-hot`}></use>
                    </svg>
                    <p className={css.optionText}>Kitchen</p>
                </div>
            ) : null}

             {data.TV ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-tv`}></use>
                    </svg>
                    <p className={css.optionText}>TV</p>
                </div>
            ) : null}

             {data.radio ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-ui-radios`}></use>
                    </svg>
                    <p className={css.optionText}>Radio</p>
                </div>
            ) : null}
            
             {data.refrigerator ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-fridge`}></use>
                    </svg>
                    <p className={css.optionText}>Refrigerator</p>
                </div>
            ) : null}

             {data.microwave ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-microwave`}></use>
                    </svg>
                    <p className={css.optionText}>Microwave</p>
                </div>
            ) : null}

             {data.gas ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-gas`}></use>
                    </svg>
                    <p className={css.optionText}>Gas</p>
                </div>
            ) : null}
            
             {data.water ? (
                <div className={css.optionItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-water`}></use>
                    </svg>
                    <p className={css.optionText}>Water</p>
                </div>
            ) : null}             
        </div>
    )
}

export default TruckOption;


