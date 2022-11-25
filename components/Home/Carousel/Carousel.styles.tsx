import styled from "styled-components";
import { vars } from "@/styles/globals";

/* main container */
export const Div_Carousel = styled.div`
	background-color: var(--red);
	padding: 5rem 0 1.5rem;
	// -1.5rem margin to offset the padding on the parent
	margin: 0 -1.5rem;
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
	width: clamp(22rem, 44vw, 38rem);
	aspect-ratio: 1;
	position: relative;
	z-index: 1;
	user-select: none;

	@media screen and (max-width: ${vars.bpTablet}) {
		width: min(64vw, 30rem);
	}

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
