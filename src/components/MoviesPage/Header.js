import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
	const [hidden, setHidden] = useState(true)
	function handleClick() {
		setHidden(prevState => !prevState);
	}
	return (
		<Container>
			<div className="logo">
				<img src='/images/logo.svg' />
			</div>
			<LinksContainer isHidden={hidden} className='links-container'>
				<ul>
					<li>
						<Link to="/">
							<a href="#">
								<img src='/images/home-icon.svg' />
								HOME
							</a>
						</Link>
					</li>
					<li>
						<a href="#">
							<img src='/images/search-icon.svg' />
							SEARCH
						</a>
					</li>
					<li>
						<a href="#">
							<img src='/images/watchlist-icon.svg' />
							WATCHLIST
						</a>
					</li>
					<li>
						<a href="#">
							<img src='/images/original-icon.svg' />
							ORIGINALS
						</a>
					</li>
					<li>
						<a href="#">
							<img src='/images/movie-icon.svg' />
							MOVIES
						</a>
					</li>
					<li>
						<a href="#">
							<img src='/images/series-icon.svg' />
							SERIES
						</a>
					</li>
				</ul>
			</LinksContainer>
			
			<Profile className="user default-user">
				<span className="user-name">Mickey</span>
				<img src='/images/avatars/avatar1.jpeg' className="avatar" />
			</Profile>
			<img onClick={handleClick} className="hamburger" src='/images/menu_black_24dp (1).svg' alt="menu" />
			<Settings className='settings'>
				<Profile className="user">
					<span className="user-name">peter</span>
					<img src='/images/avatars/avatar2.jpeg' className="avatar" />
				</Profile>
				<Profile className="user">
					<span className="user-name">Jack</span>
					<img src='/images/avatars/avatar3.jpeg' className="avatar" />
				</Profile>
				<Profile className="user">
					<span className="user-name">Simba</span>
					<img src='/images/avatars/avatar4.jpeg' className="avatar" />
				</Profile>
				<Profile className="user">
					<span className="user-name">Tiana</span>
					<img src='/images/avatars/avatar5.jpg' className="avatar" />
				</Profile>
				<Profile className="user empty">
					<span className="user-name">Add Profile</span>
					<img src='/images/watchlist-icon.svg' className="avatar" />
				</Profile>
				<div className='tools'>
					<a href='#'>Edit Profiles</a>
					<a href='#'>App Settings</a>
					<a href='#'>Account</a>
					<a href='#'>Help</a>
					<a href='#'>Log Out</a>
				</div>
			</Settings>
		</Container>
	);
}

export default Header;

const Container = styled.header`
	display: flex;
	justify-content: flex-start;
	position: relative;
	align-items: center;
	padding: 0 5%;
	min-height: 10vh;
	z-index: 10;
	color: #eee;
	&::before{
		content: '';
		position: absolute;
		inset: 0;
		width: 100%;
		padding: 0 2.6%;
		min-height: 10vh;
		background-color: black;
	}

	.user.default-user {
		z-index: 10;
		position: relative;
	}
	.hamburger {
		display: none;
		z-index: 10;
		cursor: pointer;
	}
	.logo {
		z-index: 10;
    margin-right: 2rem;
		width: 6rem;
	}
	@media screen and (max-width:1170px){
		justify-content: space-between;
		.logo {
			margin-right: auto;
		}
		.hamburger {
			display: block;
			margin-left: 1.8rem;
		}
	}
	&:hover .settings {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
`;
const LinksContainer = styled.div`
	margin-right: auto;
	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #eee;
			position: relative;
			text-decoration: none;
			margin: 0 0.7rem;
			text-align: center;
			padding: 0;
			transition: all .2s ease-in-out;
			overflow: hidden;
			img {
				transform: translateY(-3px);
				display: block;
				width: 1.6rem;
				margin-right: 0.2rem;
			}
			&::before {
        content: '';
				position: absolute;
        width: 100%;
        background-color: white;
        left: -100%;
        bottom: 1px;
			transition: all .2s ease-in-out;
        height: 3px;
			}
			&:hover::before {
				left: 0;
			}
		}
	}
	@media screen and (max-width:1170px) {

			position: absolute;
			background-color: black;
			ul {
				flex-direction: column;
				padding: 1rem;
				li {
					padding: .7rem;
				}
			}
			height: auto;
			top: 10vh;
			left: 50%;
			margin-inline: auto;
			width: calc(100% + 11%);
			right: 0;
			z-index: -1;
			transform:translateX(-50%) ${(props) => props.isHidden ? "translateY(-100%)" : "translateY(0)"};

			transition: all .2s ease-in-out;

		}
`;
const Profile = styled.div`
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	transition: all 0.25s ease-in-out;
		height: 10vh;
	.user-name {
		margin-right: 1rem;
		transition: all 0.2s ease-in-out;
	}
	&:hover {
		.user-name {
			color: white;
		}
	}
	.avatar {
		width: 60px;
		border-radius: 50%;
	}
`;

const Settings = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	border-top: 3px solid grey;
	opacity: 0;
	z-index: 100;
	visibility: hidden;
	pointer-events: none;
	background-color: black;
	position: absolute;
	width: 300px;
	min-height: 600px;
	top: calc(10vh - 5px);
	padding: 2rem;
	right: -.5%;
	transition: all .36s ease-in-out;
	.user.empty {
	.avatar {
			background-color: rgba(255,255,255,0.3);
	transition: all .2s ease-in-out;

		}
			&:hover {
				.avatar {
					background-color: rgba(255,255,255,0.5);
				}

			}
		}
	.user {
		padding-bottom: 1.8rem;
		
		.user-name {
			order: 2;
			padding-left: 2rem;
		}
	}
	.tools {
		margin-top: 2.5rem;
		a {
			margin-bottom: 1.2rem;
			color: #eee;
	transition: all .2s ease-in-out;
			&:hover {
				color: white;
			}
		}
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}
`;