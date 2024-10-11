import css from "../NavigationBar/NavigationBar.module.css";
import { NavLink } from "react-router-dom";

const NavigationBar =()=>{
    return(
        <div className={css.navigationBarContainer}>
            <img className={css.imgLogo} src="/src/images/Logo.png" alt="logo" />
            <NavLink className={({isActive})=> 
                isActive ? css.activLink : css.link} to="/">
                    Home
            </NavLink>
            <NavLink className={({isActive})=> 
                isActive ? css.activLink : css.link} to="/catalog">
                    Catalog
            </NavLink>
        </div>
    );
}

export default NavigationBar;