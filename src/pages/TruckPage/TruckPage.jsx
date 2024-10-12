import { useParams } from 'react-router-dom';
import css from '../TruckPage/TruckPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTruckById } from '../../redux/catalog/operations.js';
import TruckTitle from '../../components/TruckTitle/TruckTitle.jsx';
import TruckPhotos from '../../components/TruckPhotos/TruckPhotos.jsx';
import TruckDetails from '../../components/TruckDetails/TruckDetails.jsx';
import { selectIsLoadingTruck } from '../../redux/catalog/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';


const TruckPage =()=>{
    const {id}= useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoadingTruck);

    useEffect(()=>{
        if(id) {
            dispatch(fetchTruckById(id));
        }
    }, [id, dispatch]);

      if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Loader width="100" height="100" color="var(--Rating)" />
      </div>
    );
  }

    return(
        <div className={css.truckPageContainer}>
            <TruckTitle />
            <TruckPhotos />
            <TruckDetails />
        </div>
    );
}

export default TruckPage;