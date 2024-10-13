import sprite from "../../images/icon.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTrucksForFirstPage } from '../../redux/catalog/operations.js';
import {
    selectAC,
    selectBathroom,
    selectForm,
    selectKitchen,
    selectTransmission,
    selectTV,    
} from '../../redux/filter/selectors.js';
import {
    setForm,
    setTransmission,
    toggleAC,
    toggleBathroom,
    toggleKitchen,
    toggleTV,
    resetFilters,
} from '../../redux/filter/slice.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {selectIsLoading} from '../../redux/catalog/selectors.js'
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';
import css from './VehicleFilter.module.css';


const VehicleFilter = () => {
    
    const dispatch = useDispatch();
    const location = useLocation(); 
    const form = useSelector(selectForm);
    const AC = useSelector(selectAC);
    const transmission = useSelector(selectTransmission);
    const kitchen = useSelector(selectKitchen);
    const tv = useSelector(selectTV);
    const bathroom = useSelector(selectBathroom);
    const isLoading = useSelector(selectIsLoading);
    
    async function getAllTrucks() {
        try {
            await dispatch(fetchAllTrucksForFirstPage()).unwrap();
            toast.success('Vehicles loaded successfully!');
        } catch {
            toast.error('Failed to load vehicles!');
        }
    }

    useEffect(() => {
        dispatch(resetFilters());
    }, [dispatch, location.pathname]);

    return (
        <div className={css.vehicleFilterContainer}>
            <h3 className={css.title}>Filters</h3>
            <h2 className={css.filterTitle}>Vehicle equipment</h2>
            <div className={css.equipment}>
                <div
                    className={AC ? css.eqItemActive : css.eqItem}
                    onClick={() => dispatch(toggleAC())}
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-wind`}></use>
                    </svg>
                    <p className={css.itemText}>AC</p>
                </div>
                <div
                    className={transmission ? css.eqItemActive : css.eqItem}
                    onClick={() => dispatch(setTransmission())}
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-diagram`}></use>
                    </svg>
                    <p className={css.itemText}>Automatic</p>
                </div>
                <div
                    className={kitchen ? css.eqItemActive : css.eqItem}
                    onClick={() => dispatch(toggleKitchen())}
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-cup-hot`}></use>
                    </svg>
                    <p className={css.itemText}>Kitchen</p>
                </div>
                <div
                    className={tv ? css.eqItemActive : css.eqItem}
                    onClick={() => dispatch(toggleTV())}
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-tv`}></use>
                    </svg>
                    <p className={css.itemText}>TV</p>
                </div>
                <div
                    className={bathroom ? css.eqItemActive : css.eqItem}
                    onClick={() => dispatch(toggleBathroom())}
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-bi-droplet`}></use>
                    </svg>
                    <p className={css.itemText}>Bathroom</p>
                </div>
            </div>
            <h2 className={css.filterTitle}>Vehicle type</h2>
            <div className={css.type}>
                <div
                    className={form === 'panelTruck' ? css.typeItemActive : css.typeItem}
                    onClick={() =>
                        form === 'panelTruck'
                            ? dispatch(setForm(''))
                            : dispatch(setForm('panelTruck'))
                    }
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-bi-grid-3x3-gap`}></use>
                    </svg>
                    <p className={css.itemText}>Van</p>
                </div>
                <div
                    className={form === 'fullyIntegrated' ? css.typeItemActive : css.typeItem}
                    onClick={() =>
                        form === 'fullyIntegrated'
                            ? dispatch(setForm(''))
                            : dispatch(setForm('fullyIntegrated'))
                    }
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#icon-bi-grid`}></use>
                    </svg>
                    <p className={css.itemText}>Fully Integrated</p>
                </div>
                <div
                    className={form === 'alcove' ? css.typeItemActive : css.typeItem}
                    onClick={() =>
                        form === 'alcove'
                            ? dispatch(setForm(''))
                            : dispatch(setForm('alcove'))
                    }
                >
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#bi-grid-1x2`}></use>
                    </svg>
                    <p className={css.itemText}>Alcove</p>
                </div>
            </div>
            <button className={css.searchBtn} onClick={getAllTrucks} disabled={isLoading}>
                Search
            </button>
            {isLoading && <Loader />}
        </div>
    );
};

export default VehicleFilter;

