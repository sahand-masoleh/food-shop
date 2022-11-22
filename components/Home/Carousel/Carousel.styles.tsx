import styled from "styled-components";

/* main container */
export const Div_Carousel = styled.div`
	background-color: var(--red);
	padding-bottom: 1.5rem;
	padding-top: 5rem;
	position: relative;
	display: flex;
	overflow-x: auto;
	border-bottom: var(--outline-width) solid var(--black);
	cursor: grab;

	// Hide scrollbar
	// Chrome, Safari and Opera
	&::-webkit-scrollbar {
		display: none;
	}
	& {
		-ms-overflow-style: none; // IE and Edge
		scrollbar-width: none; // Firefox
	}

	// each set of images (ImageContainer)
	& > div {
		display: flex;
	}
`;

/* each image */
export const Div_ClippedImage = styled.div`
	pointer-events: none;
	height: 38rem;
	width: 38rem;
	flex-shrink: 0;
	margin: 0 0.5rem;
	position: relative;
	pointer-events: none;
	user-select: none;

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
	}
`;
