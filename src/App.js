import React, { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
	const [ state, setState ] = useState({ monsters: [] });
	const [ filtered, setFiltered ] = useState({ monsters: [] });
	const [ searchField, setSearchField ] = useState('');

	useEffect(() => {
		handleMonsters();
	}, []);

	const handleMonsters = () => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
			setState({ monsters: users });
			setFiltered({ monsters: users });
		});
	};

	const handleFilter = (e) => {
		setSearchField(e.target.value);
		const filtered = state.monsters.filter((monster) =>
			monster.name.toString().toLowerCase().includes(searchField.toString().toLowerCase())
		);
		setFiltered({ monsters: filtered });
	};

	return (
		<div className='App'>
			{/* 
			<input
				type='search'
				placeholder='Search Monsters'
				onChange={(e) => {
					setSearchField(e.target.value);
					console.log('value', e.target.value);
					handleFilter();
				}}
			/>
			*/}

			<SearchBox placeholder='Search Monsters' handleChange={(e) => handleFilter(e)} />

			<CardList monsters={filtered.monsters} />
		</div>
	);
}

export default App;
