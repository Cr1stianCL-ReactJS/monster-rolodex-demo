import React, { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

function App() {
	const [ state, setState ] = useState({ monsters: [] });

	useEffect(() => {
		handleMonsters();
	}, []);

	const handleMonsters = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setState({ monsters: users }));
	};

	return (
		<div className='App'>
			<CardList monsters={state.monsters} />
		</div>
	);
}

export default App;
