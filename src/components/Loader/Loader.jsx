import { Oval } from "react-loader-spinner";

const Loader =({width, height, color = "#e44848"}) => {
    return (
      <div>
        <Oval
          visible={true}
          height={width}
          width={height}
          color={color}
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }

export default Loader;