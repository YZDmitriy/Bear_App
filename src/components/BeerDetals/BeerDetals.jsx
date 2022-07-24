import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './BeerDetals.scss';

export const BeerDetals = ({ beersArray }) => {
  const { id } = useParams();

  const beersArr = beersArray.filter((beer) => {
    return beer.id === Number(id);
  });

  const singleBeer = beersArr[0];

  return (
    <div className='beer-page'>
      {/* <Link to="/" className="back-home">&#8592; Back to HomePage</Link> */}

      <div className='beer-info'>
        <img src={singleBeer.image_url} className='beer-info__img' alt='' />
        <div className='beer-info__column'>
          <h2 className='beer-info__title'>{singleBeer.name}</h2>
          <p>
            <b>Tagline:</b> {singleBeer.tagline}
          </p>
          <p>
            <b>Description:</b> {singleBeer.description}
          </p>
          <p>
            <b>ABV:</b> {singleBeer.abv}
          </p>
          <p>
            <b>Food Pairing:</b> {singleBeer.food_pairing}
          </p>
        </div>
      </div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
    </div>
  );
};
