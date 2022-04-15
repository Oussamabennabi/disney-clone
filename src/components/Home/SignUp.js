import React from 'react';
import styled from 'styled-components';
function SignUp() {
	return (
		<Container>
			<img src='/images/cta-logo-one.svg' />
			<TextField className="text-field">
				<p>
					Get The Disney Bundle to stream the best movies, shows, and sports
					with Disney+, Hulu, and ESPN+. <a href="#">Terms Apply</a>. Learn more
					about 
					<a href="#"> The Disney Bundle.</a>
				</p>
				<button className="signIn-btn">LOG IN NOW</button>
			</TextField>
		</Container>
	);
}

export default SignUp;
const Container = styled.section`
	display: flex;
	padding: 5%;
	outline: 2px solid white;
	margin: auto;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	width: 90%;
	gap: 2rem;
	img {
		flex: 1;
		width: 10%;
		object-fit: cover;
	}
	.text-field {
		flex: 1;
	}
	@media screen and (max-width: 758px) {
    img {
      width: 80%;
    }
    flex-direction: column;
    text-align: center;
	}
`;
const TextField = styled.div`
	color: white;
	a {
		color: white;
		text-decoration: underline;
	}
	button.signIn-btn {
		padding: 1rem;
    margin-top: 1rem;
		width: 70%;
		font-size: 1rem;
		border-radius: 0.5rem;
		border: none;

		outline: none;
		color: white;
		background-color: rgb(71, 145, 215);
		transition: all 0.2s ease-in-out;

		cursor: pointer;
		&:hover {
			background-color: rgb(91, 145, 215);
		}
	}
`;
