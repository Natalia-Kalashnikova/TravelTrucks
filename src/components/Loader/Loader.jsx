import { Oval } from "react-loader-spinner";
import css from './Loader.module.css'

const Loader =() => {
    return (
      <div className={css.loaderWrapper}>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }

export default Loader;