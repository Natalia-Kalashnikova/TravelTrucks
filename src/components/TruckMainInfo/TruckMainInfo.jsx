import { useSelector } from 'react-redux';
import css from './TruckMainInfo.module.css';
import { selectTruck } from '../../redux/catalog/selectors.js';
import TruckOption from '../TruckOption/TruckOption.jsx';
import VehicleDetails from '../VehicleDetails/VehicleDetails.jsx';

const TruckMainInfo =()=>{
    const data = useSelector(selectTruck);
    return <>{data ? <div className={css.truckMainInfoContainer}>
      <TruckOption data={data}/>
      <VehicleDetails />
    </div> : null}</>;

}

export default TruckMainInfo;