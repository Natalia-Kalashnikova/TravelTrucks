import { Link } from "react-router-dom";
import css from "../HomePage/HomePage.module.css";

const HomePage=()=>{
    return <div className={css.homePageContainer}>
        <h1 className={css.homePageTitle}>Campers of your dreams</h1>
        <p className={css.homePageText}>You can find everything you want in our catalog</p>
        <Link className={css.nvgBtn}to="/catalog">View Now</Link>
    </div>
}

export default HomePage;