import css from './TruckItem.module.css';
import sprite from "../../images/icon.svg";
import TruckOption from '../TruckOption/TruckOption.jsx';
import { Link } from 'react-router-dom';

const TruckItem =({data})=>{
    return (
        <div className={css.truckItemContainer}>
          <img
            src={data.gallery[0].thumb}
            alt="truck photo"
            className={css.photo}
          />
          <div className={css.data}>
            <div className={css.head}>
              <h2 className={css.name}>{data.name}</h2>
              <p className={css.price}>€{data.price}</p>
            </div>
            <div className={css.rating}>
              <span className={css.text}>
                <div className={css.star}>
                  <svg>
                    <use xlinkHref={`${sprite}#icon-Rating`}></use>
                  </svg>
                </div>
                {`${data.rating}(${data.reviews.length} Reviews)`}
              </span>
              <span className={css.location}>
                <svg>
                <use xlinkHref={`${sprite}#icon-map`}></use>
                </svg>
                {data.location}
              </span>
            </div>
            <p className={css.description}>{data.description}</p>
            <TruckOption data={data} />
            <Link to={`/catalog/${data.id}`} className={css.showMoreBtn}>
              Show more
            </Link>
          </div>
        </div>
      );
}

export default TruckItem;