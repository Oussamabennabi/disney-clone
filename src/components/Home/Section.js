import React from 'react';
import styled from 'styled-components';
export const Section = () => {
	return (
		<Container>

			<img src='/images/section.png' alt="sectionimage"/>
			<div className="section-info">
				<h1>Watch the way you want</h1>
				<ul>
					<li>
						Host virtual movie nights with GroupWatch. Pause, rewind and react
						with up to six friends. Subscription is required to join GroupWatch.
					</li>
					<li>Download any movie or series and watch on-the-go.</li>
					<li>
						Enjoy an ever-growing range of titles in stunning 4K UHD and Dolby
						Atmos sound on compatible devices.
					</li>
					<li>Stream on up to four devices at the same time.</li>
				</ul>
			</div>
		</Container>
	);
};

const Container = styled.section`
	min-height: 500px;
  padding: 5%;
  margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		flex: 1;
		object-fit: cover;
    width: 300px;
	}
	.section-info {
		flex: 1;
		color: white;
    padding-inline: 2rem;
		h1 {
			padding-bottom: 3rem;
			font-size: 2.3rem;
		}
    ul li {
      padding-bottom: 2rem;
      font-size: 1.2rem;
      color: white;
    }
	}
  @media screen and (max-width:742px){
    flex-direction: column;
    img {
      width: 100%;
    }
    .section-info {
      h1 {
        padding-top: 3rem;
        text-align: center;
      }

    }
  }
`;
