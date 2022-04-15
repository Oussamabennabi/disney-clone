import React from 'react';
import styled from 'styled-components';
// import photo_1 from '../../images/gridImages/1.jpeg';
// import photo_2 from '../../images/gridImages/2.png';
// import photo_3 from '../../images/gridImages/3.png';
// import photo_4 from '../../images/gridImages/4.png';
// import photo_5 from '../../images/gridImages/5.jpeg';
// import photo_6 from '../../images/gridImages/6.png';
// import photo_7 from '../../images/gridImages/7.jpeg';
// import photo_8 from '../../images/gridImages/8.jpeg';
// import photo_9 from '../../images/gridImages/9.jpeg';
function PhotoGrid() {
	return (
		<>
			<TextField >
				<h1>Disney+ has your favorite stories</h1>
				<p>
					An unprecedented collection of the world's most beloved movies and TV
					series.
				</p>
			</TextField>
			<Container>
				<img src="/images/gridImages/1.jpeg" />
				<img src='/images/gridImages/2.png' />
				<img src="/images/gridImages/3.png" />
				<img src="/images/gridImages/4.png"/>
				<img src='/images/gridImages/5.jpeg' />
				<img src='/images/gridImages/6.png' />
				<img src='/images/gridImages/7.jpeg' />
				<img src='/images/gridImages/8.jpeg' />
				<img src='/images/gridImages/9.jpeg' />
			</Container>
		</>
	);
}

export default PhotoGrid;
const TextField = styled.div`
	text-align: center;
	color: white;
	padding: 5%;
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1.6rem;
  }
`;
const Container = styled.section`
	display: grid;
	padding: 5%;
	margin: auto;
	gap: 1rem;
	grid-template-columns: repeat(3, 1fr);
	img {
		object-fit: cover;
		width: 100%;
	}
	@media screen and (max-width: 770px) {
		grid-template-columns: repeat(2, 1fr);
		img:last-child {
			grid-column-start: 1;
			grid-column-end: 3;
		}
	}
`;
