import { useSelector } from "react-redux";
import css from './VehicleDetails.module.css';
import {selectTruck} from '../../redux/catalog/selectors.js';
import formatFormTruck from '../../utils/formatFormTruck.js';
import formatQuantity from '../../utils/formatQuantity.js';

const VehicleDetails=()=>{
    const data = useSelector(selectTruck);
    return(
        <>
          {data ? (
            <div className={css.vehicleDetailsContainer}>
                <h2 className={css.title}>Vehicle details</h2>
                <ul className={css.list}>
                    <li className={css.item}>
                        <span className={css.text}>Form</span>
                        <span className={css.text}>
                            {data.form ? formatFormTruck(data.form) : null}
                        </span>
                    </li>
                    <li className={css.item}>
                        <span className={css.text}>Length</span>
                        <span>
                            {data.length ? formatQuantity(data.length) : null}
                        </span>
                    </li>
                    <li className={css.item}>
                    <span className={css.text}>Width</span>
                        <span>
                            {data.width ? formatQuantity(data.width) : null}
                        </span>
                    </li>
                    <li className={css.item}>
                    <span className={css.text}>Height</span>
                        <span>
                            {data.height ? formatQuantity(data.height) : null}
                        </span>
                    </li>
                    <li className={css.item}>
                    <span className={css.text}>Tank</span>
                        <span>
                            {data.tank ? formatQuantity(data.tank) : null}
                        </span>
                    </li>
                    <li className={css.item}>
                    <span className={css.text}>Consumption</span>
                        <span className={css.text}>{data.consumption}</span>
                    </li>
                </ul>
            </div>
          ) : null}
        </>
    );
}

export default VehicleDetails;