// import css from './NavigationBar.module.css';
// import { NavLink } from "react-router-dom";
// import photo from '../../images/Logo.png';
// import photo2x from '../../images/Logo.png';

// const NavigationBar =()=>{
//     return(
//         <div className={css.navigationBarContainer}>            
//             <picture className={css.logo}>
//                 <source srcSet={`${photo2x} 2x`} />
//                 <img className={css.imgLogo} src={photo} alt="logo" />
//             </picture>
//             <NavLink className={({isActive})=> 
//                 isActive ? css.activeLink : css.link} to="/" end>
//                     Home
//             </NavLink>
//             <NavLink className={({isActive})=> 
//                 isActive ? css.activeLink : css.link} to="/catalog" end>
//                     Catalog
//             </NavLink>
//         </div>
//     );
// }

// export default NavigationBar;


import css from './NavigationBar.module.css';
import { NavLink } from "react-router-dom";
import photo from '../../images/Logo.png';
import photo2x from '../../images/Logo@2x.png';

const NavigationBar =()=>{
    return(
        <div className={css.header}>
            <div className={css.navigationBarContainer} >
                <picture className={css.logo}>
                    <source srcSet={`${photo2x} 2x`} />
                    <img className={css.imgLogo} src={photo} alt="logo" />
                </picture>
                <NavLink className={({isActive})=> 
                    isActive ? css.activeLink : css.link} to="/" end>
                        Home
                </NavLink>
                <NavLink className={({isActive})=> 
                    isActive ? css.activeLink : css.link} to="/catalog" end>
                        Catalog
                </NavLink>
            </div>            
        </div>
    );
}

export default NavigationBar;