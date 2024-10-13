import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTruckById } from '../../redux/catalog/operations.js';
import { selectIsLoadingTruck, selectErrorTruck } from '../../redux/catalog/selectors.js';
import TruckTitle from '../../components/TruckTitle/TruckTitle.jsx';
import TruckPhotos from '../../components/TruckPhotos/TruckPhotos.jsx';
import TruckDetails from '../../components/TruckDetails/TruckDetails.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import css from '../TruckPage/TruckPage.module.css';


const TruckPage = () => {
  
  const {id}= useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoadingTruck);
  const errorTruck = useSelector(selectErrorTruck);

  useEffect(() => {
      
        if(id) {
            dispatch(fetchTruckById(id));
        }
  }, [id, dispatch]);
  
  useEffect(() => {
    if (errorTruck) {
      navigate('/not-found');
    }
  }, [errorTruck, navigate]);  

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