/* eslint-disable react/prop-types */
import { AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getdetail } from '../redux/popup/popup';

const Item = ({ record }) => {
  const dispatch = useDispatch();
  const handleClick = (record) => {
    dispatch(getdetail(record));
  };

  const image = `images/${record.name}.jpg`;
  return (
        <button onClick={() => handleClick(record)} type="button">
          <Link to="/details"><div className='cards'>
            <img src={image} alt={record.name} />
            <div> <p>
              {record.name}
            </p>
              </div>
      </div>
      </Link>
        </button>
      // </div>
    // </div>
  );
};

export default Item;
