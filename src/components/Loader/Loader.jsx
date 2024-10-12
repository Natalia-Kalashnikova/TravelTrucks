import { Oval } from "react-loader-spinner";
import css from './Loader.module.css'

const Loader =() => {
    return (
      <div className={css.loaderWrapper}>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#e44848"
          secondaryColor="#e44848"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="oval"
        />
      </div>
    )
  }

export default Loader;