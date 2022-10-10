/* eslint-disable react/prop-types */
import React from 'react';

const Li = ({ nutritions }) => (
  <>
       <li>
        <p> calories: </p>
        <p>
          {' '}
          {nutritions.calories}
        </p>
      </li>
    <li>
      <p> carbohydrates: </p>
      <p>
        {' '}
        {nutritions.carbohydrates}
        {' '}
      </p>
    </li>
    <li>
      <p> fat: </p>
      <p>
        {' '}
        {nutritions.fat}
        {' '}
      </p>
    </li>
    <li>
      <p> protein: </p>
      <p>
        {' '}
        {nutritions.protein}
        {' '}
      </p>
    </li>
    <li>
      <p>   sugar: </p>
      <p>
        {' '}
        {nutritions.sugar}
        {' '}
      </p>
    </li>
  </>
);

export default Li;
