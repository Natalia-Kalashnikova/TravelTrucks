import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchAllTrucksForFirstPage} from '../../redux/catalog/operations.js';
import Filter from '../../components/Filter/Filter.jsx';
import TrucksList from '../../components/TrucksList/TrucksList.jsx';
import css from '../Catalog/Catalog.module.css';


const Catalog =()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllTrucksForFirstPage());
    }, [dispatch]);
    
    return(
        <div className={css.catalogContainer}>
            <Filter />
            <TrucksList />
        </div>
    );
}

export default Catalog;