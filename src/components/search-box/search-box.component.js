import React from 'react';

import './search-box.styles.css';

//import './src/App.css';

export const SearchBox = ({ placeholder, handleChange }) => {
	return <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />;
};
