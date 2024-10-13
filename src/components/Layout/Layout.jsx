import { Toaster } from "react-hot-toast";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";


const Layout = ({ children }) => {
    
    return(
        <div>
            <NavigationBar />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default Layout;