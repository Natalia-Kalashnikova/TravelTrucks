import sprite from "../../images/icon.svg";

const HomePage=()=>{
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            <svg >
                <use xlinkHref={`${sprite}#icon-gas`}></use>
              </svg>
        </div>
    );    
}

export default HomePage;