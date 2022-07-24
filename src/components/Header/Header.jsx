import React from 'react';
import './Header.scss';

export const Header = ({ searchTerm, handleInput }) => {


  return (
    <div className='Header'>
      <div>BEER</div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInput}
        placeholder='Search for your beer...'
      />
    </div>
  );
};
