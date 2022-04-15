import React from 'react';
import styled from 'styled-components';
function Questions() {
	return (
		<Container>
			<h1>Frequently Asked Questions</h1>
			<QuestionsSection>
				<details>
					<summary>What is Disney+?</summary>
					<p>
						Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
						National Geographic, and more. From new releases to your favorite
						classics and exclusive Originals, there's something for everyone,
						all ad free.
					</p>
				</details>
				<details>
					<summary>What can I watch on Disney+?</summary>
					<p>
						With Disney+, you can choose from an always-growing collection of
						stories.
					</p>
					<ul>
						<li>New releases and timeless classics</li>
						<li>Exclusive new Original Movies and Series</li>
						<li>Exciting specials and limited-time streaming events</li>
						<li>
							Nostalgic throwbacks and past seasons of your favorite shows
						</li>
						<li>
							The entire Skywalker Saga and much of the Marvel Cinematic
							Universe
						</li>
						<li>Beloved and experimental shorts</li>
						<li>Documentaries, unscripted series, and so much more</li>
					</ul>
				</details>
				<details>
					<summary>How much does Disney+ cost?</summary>
					<p>
						Access unlimited entertainment with Disney+ for $7.99/month or
						$79.99/year.
					</p>
				</details>

				<details>
					<summary>What's included with Disney+?</summary>
					<p>With Disney+, you get:</p>
					<ul>
						<li> A premium ad-free experience</li>
						<li> Unlimited downloads on up to 10 devices</li>
						<li>Over 100 titles in 4K UHD and HDR</li>
						<li>
							The ability to watch on four screens at once at no extra cost
						</li>
					</ul>
				</details>

				<details>
					<summary>What is The Disney Bundle?</summary>
					<p>
						The Disney Bundle includes Disney+, ESPN+, and the Hulu plan that
						fits you best for a discounted price. You can save 25%, compared to
						the monthly cost of subscribing to all 3 services separately! Choose
						between The Disney Bundle with Hulu (ad-supported) for $13.99/month
						or with Hulu (No Ads) for $19.99/month.
						<a href="#">Learn More</a> . With Disney+, you get new releases,
						classics, series, and Originals from the creators at Disney, Pixar,
						Marvel, Star Wars, and Nat Geo. With Hulu, you can enjoy over 80,000
						episodes of every kind of TV, including hit series, breakthrough
						Hulu Originals, and kids TV. And with ESPN+, you can stream
						thousands of events, top Originals, the complete 30 for 30 library,
						and more. <a href="#">Get all three </a>
						and start streaming now!
					</p>
				</details>
			</QuestionsSection>
		</Container>
	);
}

export default Questions;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5%;
  margin: auto;
  color: white;
  h1 {
    padding-bottom: 2rem;
  }
  min-height: 700px;
`;
const QuestionsSection = styled.section`
	width: 100%;
	details {
		transition: height 3s ease-in;
		background-color: rgb(19,21,29);
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 1rem;

		summary {
			font-size: 1.5rem;
			cursor: pointer;
			position: relative;
		}
		p {
			font-size: 1rem;
			padding-top: 1rem;
			margin-left: 1.7rem;
		}
		ul li {
			font-size: 1rem;
			margin-left: 2.7rem;

			padding-top: 1rem;

			padding-bottom: 0.7rem;
		}
	}
	details[open] summary ~ p {
		animation: sweepP 0.5s ease-in-out;
	}
	details[open] summary ~ ul li {
		animation: sweepUL 0.5s ease-in-out;
	}
	summary::marker {
    display: none ;
		content: '';
}
summary:after {
    content: "+";
    color: #fff;
    float: right;
    font-size: 2em;
    font-weight: bold;
    margin: -2px 10px 0 0;
    padding: 1px 0 3px 0;
    text-align: center;
    width: 30px;
}
details[open] summary:after {
	content: '-';
}
@keyframes sweepUL {
		0% {
			opacity: 0;
			margin-left: -2rem;
		}
		100% {
			opacity: 1;
			margin-left: 2.7rem;
		}
	}
	@keyframes sweepP {
		0% {
			opacity: 0;
			margin-left: -2rem;
		}
		100% {
			opacity: 1;
			margin-left: 1.7rem;
		}
	}
`;
