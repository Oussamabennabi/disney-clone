import React from 'react'
import styled from 'styled-components'

function Artical() {
  return (
		<>
			<Container>
				<h1>Available on your favorite devices</h1>
        <Devices className='devices'>

				<div className="device">
						<img src= "/images/devices/tv.png"/>
					<h2>TV</h2>
					<ul>
						<li>Amazon Fire TV</li>
						<li>Android TV devices</li>
						<li>AppleTV</li>
						<li>Chromecast</li>
						<li>LG TV</li>
						<li>Roku</li>
						<li>Samsung</li>
						<li>Xfinity X1 & Flex</li>
					</ul>
				</div>
				<div className="device">
						<img src="/images/devices/pc.png" />
					<h2>Computer</h2>
					<ul>
						<li>Chrome OS</li>
						<li>MacOS</li>
						<li>Windows PC</li>
					</ul>
				</div>
				<div className="device">
						<img src="/images/devices/phone.png" />
					<h2>Mobile & Tablet</h2>
					<ul>
						<li>Amazon Fire Tablets</li>
						<li>Android Phones & Tablets</li>
						<li>iPhone and iPad</li>
					</ul>
				</div>
				<div className="device">
						<img src="/images/devices/console.png" />
					<h2>Game Consoles</h2>
					<ul>
						<li>PS4</li>
						<li>PS5</li>
						<li>Xbox Series X</li>
						<li>Xbox Series S</li>
					</ul>
				</div>
        </Devices>
			</Container>
		</>
	);
}

export default Artical
const Container = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5%;
	margin: auto;
	flex-direction: column;
	min-height: 600px;

	text-align: center;
	color: white;
	h1 {
		padding-bottom: 2rem;
	}
	@media screen and (max-width: 951px) {
		.devices {
			flex-wrap: wrap;
      .device {
        width:calc(50% - 1rem);
        // 1rem for the gap in devices
      }
		}
	}
`;
const Devices = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  gap: 1rem;
	.device {
		img {
			width: 100%;
		}
		h2,
		ul {
			li {
				list-style: none;
			}
		}
		h2 {
			padding-bottom: 1rem;
		}
	}
`;