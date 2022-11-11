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
	pointer-events: all;

	// Hide scrollbar
	// Chrome, Safari and Opera
	&::-webkit-scrollbar {
		display: none;
	}
	& {
		-ms-overflow-style: none; // IE and Edge
		scrollbar-width: none; // Firefox
	}

	// each set of images
	& > div {
		display: flex;
	}
`;

// each image
export const Div_ClippedImage = styled.div`
	height: 38rem;
	width: 38rem;
	flex-shrink: 0;
	margin: 0 0.5rem;
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
