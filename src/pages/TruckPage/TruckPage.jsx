import { useParams } from 'react-router-dom';
import css from '../TruckPage/TruckPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTruckById } from '../../redux/catalog/operations.js';
import TruckTitle from '../../components/TruckTitle/TruckTitle.jsx';
import TruckPhotos from '../../components/TruckPhotos/TruckPhotos.jsx';
import TruckDetails from '../../components/TruckDetails/TruckDetails.jsx';


const TruckPage =()=>{
    const {id}= useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(id) {
            dispatch(fetchTruckById(id));
        }
    }, [id, dispatch]);

    return(
        <div className={css.truckPageContainer}>
            <TruckTitle />
            <TruckPhotos />
            <TruckDetails />
        </div>
    );
}

export default TruckPage;