import { selectAllTrucks, selectHasMore, selectIsLoading } from '../../redux/catalog/selectors.js';
import { fetchAllTrucks } from '../../redux/catalog/operations.js';
import TruckItem from '../TruckItem/TruckItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import css from './TrucksList.module.css';
import Loader from '../Loader/Loader.jsx';

const TrucksList = () => {
    const dispatch = useDispatch();
    const hasNextPage = useSelector(selectHasMore);
    const trucks = useSelector(selectAllTrucks);
    const isLoading = useSelector(selectIsLoading);

    async function getNextPageTrucks() {
        try {
            await dispatch(fetchAllTrucks()).unwrap();
            toast.success('Vehicles loaded successfully!');
        } catch {
            toast.error('Failed to load vehicles!');
        }
    }

    return (
        <div className={css.trucksListContainer}>
            {trucks.length > 0
                ? trucks.map(item => <TruckItem key={item.id} data={item} />)
                : !isLoading && <p>Nothing found matching your request!</p>}
            
            {isLoading && <Loader />}

            {!isLoading && hasNextPage && (
                <button
                    className={css.loadMore}
                    onClick={getNextPageTrucks}
                >
                    Load more
                </button>
            )}
        </div>
    );
}

export default TrucksList;



