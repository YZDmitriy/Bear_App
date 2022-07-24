import React from 'react';
import './BeersCard.scss';

export const BeersCard = ({ img, name, description }) => {
  return (
    <>
      <div className='beers__card'>
        <img src={img} className='beers__card__img' alt='' />
        <h3 className='beers__card__title'>{name}</h3>
        <p className='beers__card__tagline'>
          {description.length > 140
            ? description.slice(0, 140) + '...'
            : description}
        </p>
      </div>
    </>
  );
};
