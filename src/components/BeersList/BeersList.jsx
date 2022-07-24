import React from 'react';
import { Link } from 'react-router-dom';
import { BeersCard } from '../BeersCard/BeersCard';
import './BeersList.scss';

export const BeersList = ({ beersArray }) => {
  const beersArrayJSX = beersArray.map((beer) => {
    return (
      <Link to={`/${beer.id}`} key={beer.id}>
        <BeersCard
          key={beer.id}
          img={beer.image_url}
          name={beer.name}
          description={beer.description}
        />
      </Link>
    );
  });

  return <main className='main'>{beersArrayJSX}</main>;
};
