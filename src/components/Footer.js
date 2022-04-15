import React from 'react'
import styled from 'styled-components';
// import Logo from '../images/logo.svg'
function Footer() {
	return (
		<>
			<Container>
				<img style={{ paddingBottom: "1rem", margin: "auto", width: "5rem" }} src='/images/logo.svg' />

				<LinksContainer>
					<a href="#">English</a>
					<a href="#">Subscriber Agreement</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Your California Privacy Rights</a>
					<a href="#">Do Not Sell My Personal Information</a>
					<a href="#">Children's Online Privacy Policy</a>
					<a href="#">Closed Captioning</a>
					<a href="#">Interest-Based Ads</a>
					<a href="#">Supported Devices</a>
					<a href="#">Help</a>
					<a href="#">Gift</a>
					<a href="#">Disney+</a>
					<a href="#">About Us</a>
					<a href="#">Disney+ Partner Program</a>
					<a href="#">The Disney Bundle</a>
				</LinksContainer>

			</Container>
		</>
	);
}

export default Footer
const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  margin: auto;
  padding-bottom: 3rem;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    color: white;
    margin: 1rem;
		&:hover {
			text-decoration: underline;
			text-decoration-thickness: 2px;
		}
  }
`
const LinksContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
    flex-wrap: wrap;

`;