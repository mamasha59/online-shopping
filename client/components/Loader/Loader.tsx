import { FC } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Loader:FC<{loading:boolean}> = ({loading}) => {
  return (
    <div className="flex justify-center z-30 min-h-[150px]">
        <ClockLoader loading={loading} color={'#e84aa4'} aria-label="загрузка данных..."/>
    </div>
  )
};

export default Loader;
