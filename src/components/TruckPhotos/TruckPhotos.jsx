import { useSelector } from "react-redux";
import {selectTruck} from '../../redux/catalog/selectors.js';
import css from './TruckPhotos.module.css';


const TruckPhotos = () => {
    
    const data = useSelector(selectTruck);

    return(
        <>
            {data ? (
                <div className={css.truckPhotosContainer}>
                    {data.gallery ? data.gallery.map((item, index)=>(
                        <img 
                            className={css.photo} 
                            src={item.original} 
                            alt="truck photo" 
                            key={index}
                        />
                    )) : null}
                </div>
            ) : null}
        </>
    );
}

export default TruckPhotos;