import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = ({ searchTerm, handleInput }) => {


  return (
    <div className='Header'>
      <Link to={'/'} className='name'>BEER STORE</Link>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInput}
        placeholder='Search for your beer...'
      />
    </div>
  );
};
