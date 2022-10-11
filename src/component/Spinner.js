import { BallTriangle } from 'react-loader-spinner';

const Spinners = () => (
  <div className="spinner">
    <BallTriangle
      height={150}
      width={150}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible
    />
  </div>
);

export default Spinners;
