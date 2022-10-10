import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from './Container';
import Li from './Li';

const Popup = () => {
  const { data } = useSelector((state) => state.popup);
  const image = `images/${data.name}.jpg`;

  return (
    <div className="popup">
      <button type="button">
        <Link to="/" element={<Container />}><AiOutlineLeft /></Link>
      </button>
      <div className="body">
        <img src={image} alt={data.name} />
        {' '}
        <div className="lists"><li>
          <p> Name : </p>
          <p>
            {' '}
            {data.name}
          </p>
        </li>
        <li>
          <p>Id:</p>
          <p>
            {' '}
            {data.id}
            {' '}
          </p>
        </li>
        <li>
          <p>  Family : </p>
          <p>
            {' '}
            {data.family}
            {' '}
          </p>
        </li>
        <li>
          <p>  Order : </p>
          <p>
            {' '}
            {data.order}
            {' '}
          </p>
        </li>
        <li>
          <p> Genus:  </p>
          <p>
            {' '}
            {data.genus}
            {' '}
          </p>
        </li>
        <div className="nut">
          <ul>
          <li>
            {' '}
            <p>
              Nutritions :
              {' '}
            </p>
          </li>
          <Li nutritions={data.nutritions} />
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
