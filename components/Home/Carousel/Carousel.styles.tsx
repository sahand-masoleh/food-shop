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
	flex-shrink: 0;
	margin: 0 0.5rem;
	height: 38rem;
	width: 38rem;
	position: relative;
	z-index: 1;
	user-select: none;

	& > a > img {
		height: 100%;
		object-fit: cover;
		clip-path: var(--clip);
	}

	& > svg {
		z-index: -1;
		inset: 0;
		position: absolute;
		stroke: black;
	}

	& > span {
		opacity: 0;
		transition: opacity var(--transition-duration) linear;
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		background-color: var(--white);
		padding: 0.33ch 1ch;
		border-radius: 2rem;
		text-transform: capitalize;
		font-size: 1.6rem;
		font-weight: 600;
		pointer-events: none;
	}

	&.hovered > span {
		opacity: 1;
	}
`;
