import sprite from "../../images/icon.svg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteList } from '../../redux/favorite/selectors.js';
import { toggleFavorite } from '../../redux/favorite/slice.js';
import TruckOption from '../TruckOption/TruckOption.jsx';
import css from './TruckItem.module.css';


const TruckItem = ({ data }) => {
  
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const isFavorite = favoriteList.includes(data.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(data.id));
  };

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
            <div className={css.priceWrapper}>              
              <p className={css.price}>€{data.price.toFixed(2)}</p>
              <button className={css.buttonIcon} onClick={handleFavoriteClick}>
                {isFavorite ? (
                  <svg className={css.redHeartIcon}>
                    <use xlinkHref={`${sprite}#icon-property-heart`}></use>
                  </svg>
                ) : (
                  <svg className={css.heartIcon}>
                    <use xlinkHref={`${sprite}#icon-property-heart`}></use>
                  </svg>
                )}
              </button>
             </div>
            </div>
            <div className={css.rating}>
              <span className={css.text}>
                  <svg className={css.star}>
                    <use xlinkHref={`${sprite}#icon-rating`}></use>
                  </svg>
                {`${data.rating}(${data.reviews.length} Reviews)`}
              </span>
              <span className={css.locationWrapper}>
                <svg className={css.location}>
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


