import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
const Header = () => {
	const dispatch = useDispatch()
	const signIn = () => {
		auth.signInWithPopup(provider).then(result => {
			console.log(result)
		})
	}
	return (
		<Container>
			<Link to="/movies">
				<button onClick={signIn} className="logIn">LOG IN</button>
			</Link>
			<img alt="logos" src="/images/cta-logo-one.svg"/>
			<button className="signIn-btn">GET THE DISNEY BUNDLE</button>
			<small>
				Stream now <a href="#terms">Terms Apply</a>
			</small>
			<img alt="logos" src="/images/cta-logo-two.png" />
			<a href="#terms">Sign up for Disney+ only</a>
		</Container>
	);
};

export default Header;

const Container = styled.header`
	display: flex;
	button.logIn {
		position: fixed;
		top: 1rem;
		right: 3rem;
		background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
		color: white;
		padding: .7rem;
    font-weight: 100;
		border-radius: 0.2rem;
		border: none;
		outline: 1px solid white;
		font-size: 1rem;
    transition: all .2s ease;
    &:hover{
      background-color: white;
      outline: 1px solid black;
      color: black;
    }
	}
	img {
		/* min-width: 500px; */
		width: 80%;
		max-width: 500px;

		margin-bottom: 1rem;
		margin-top: 1rem;
	}
	color: white;
	a {
		color: white;
		text-decoration: underline;
		text-decoration-thickness:2px ;
	}
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/images/login-background.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh;
	button.signIn-btn {
		background-color: goldenrod;
		padding: 1.2rem;
		margin-bottom: 1rem;
		font-size: 1rem;
		border-radius: 0.3rem;
		border: none;
		outline: none;
		width: 80%;
		max-width: 500px;
		color: white;
		background-color: rgb(1,104,241);
		transition: all 0.2s ease-in-out;

		cursor: pointer;
		&:hover {
			background-color: rgb(91, 145, 215);
		}
	}
`;
