import React from 'react';

import './App.css';
import Home from './components/Home/Home';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from './components/MoviesPage/DetailsPage';
import { useSelector } from 'react-redux';

function App() {
	const isSignIn = useSelector(state => state.signIn.isSignIn);
	console.log(isSignIn)
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path='/details/:movieId' element={<DetailsPage /> }/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
