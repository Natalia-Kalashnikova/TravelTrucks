import css from "../../components/Layout/Layout.module.css";
import { Toaster } from "react-hot-toast";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";

const Layout =({children})=>{
    return(
        <div className={css.LayoutContainer}>
            <NavigationBar />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default Layout;