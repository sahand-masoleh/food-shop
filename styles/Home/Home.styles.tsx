import styled from "styled-components";

// main container
export const Div_Hero = styled.div`
	background-color: var(--yellow);
	overflow-x: hidden;
	padding-bottom: 1.5rem;
	padding-top: 5rem;
	position: relative;
	display: flex;
	overflow-x: auto;

	// each set of images
	& > div {
		position: relative;
		display: flex;
		gap: 1rem;

		&[data-id="first"] {
			left: var(--left, 0);
		}

		&[data-id="second"] {
			left: var(--left, 0);
		}
	}
`;

// each image
export const Div_ClippedImage = styled.div`
	height: 38rem;
	width: 38rem;
	flex-shrink: 0;
	position: relative;

	& > img {
		z-index: 10;
		mask: inherit;
		object-fit: cover;
		object-position: center;
		clip-path: var(--clip);
	}

	& > svg {
		position: absolute;
		stroke: black;
		stroke-width: 1px;
	}
`;
