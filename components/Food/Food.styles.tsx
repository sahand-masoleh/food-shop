import { maxWidth, vars } from "@/styles/globals";
import styled from "styled-components";

export const Main = styled.main`
	padding: 0 1.5rem;
	margin: 7rem 0;
	color: var(--black);

	/* wrapper around the content */
	& > div {
		${maxWidth()}
		margin: 0 auto;
		display: grid;
		grid-template-areas:
			"thumbnails active title"
			"thumbnails active selector"
			"thumbnails active description";
		grid-template-columns: auto 1.2fr 1fr;
		grid-template-rows: minmax(0, auto) minmax(0, auto) 1fr;
		gap: 1.5rem;

		@media screen and (max-width: ${vars.bpCRT}) {
			grid-template-areas:
				"title"
				"description"
				"images"
				"selector";
			grid-template-columns: unset;
			grid-template-rows: unset;
		}
	}
`;

/* thumbnail container */
/* DESKTOP ONLY */
export const Div_ThumbContainer = styled.div`
	grid-area: thumbnails;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-shrink: 0;

	@media screen and (max-width: ${vars.bpCRT}) {
		display: none;
	}

	& > button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		border-radius: 1rem;
		outline: 0.2rem solid;
		outline-color: transparent;
		transition: outline-color 0.2s linear;

		&.active {
			outline-color: var(--black);
		}

		& > img {
			object-fit: cover;
			height: 5.5rem;
			width: 5.5rem;
			border-radius: inherit;
		}
	}
`;

/* active image */
/* DESKTOP ONLY */
export const Div_ActiveImage = styled.div`
	grid-area: active;
	aspect-ratio: 1/1.5;
	margin-right: 1.5rem;

	@media screen and (max-width: ${vars.bpCRT}) {
		display: none;
	}

	& > img {
		height: 100%;
		object-fit: cover;
		border-radius: 8rem;
	}
`;

/* image container */
/* < 1024px ONLY */
export const Div_ImageContainer = styled.div`
	grid-area: images;
	display: flex;
	gap: 1.5rem;
	overflow-x: scroll;
	margin: 0 -1.5rem 1.5rem;
	padding: 0 1.5rem;
	cursor: grab;

	@media screen and (min-width: 1025px) {
		display: none;
	}

	& > img {
		border-radius: 2rem;
		object-fit: cover;
		aspect-ratio: 5/6;
		height: 34rem;
		flex-grow: 1;
		max-width: 90%;
	}

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

/* type and title */
export const Div_Title = styled.div`
	grid-area: "title";

	// TODO: background color
	& > span {
		display: block;
		width: min-content;
		text-transform: uppercase;
		background-color: var(--green);
		padding: 0.5ch 2ch;
		border-radius: 2rem;
		margin-bottom: 1ch;
	}

	& > h2 {
		text-transform: capitalize;
		font-family: var(--font-inktrap);
		font-size: 3rem;
		font-weight: unset;

		@media screen and (max-width: ${vars.bpMobile}) {
			font-size: 2rem;
		}
	}
`;

/* quantity selector */
export const Div_QuantitySelector = styled.div`
	grid-area: selector;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	/* buttons and indicator */
	& > div {
		display: flex;
		align-items: center;

		& > button {
			width: 4rem;
			height: 4rem;
			background-color: transparent;
			border: none;
			cursor: pointer;
			fill: transparent;
			stroke: var(--black);

			& > svg {
				stroke: inherit;
				fill: inherit;
				stroke-width: 16;
				transition: var(--transition-duration) linear;
				transition-property: stroke, fill;
			}
			&:hover:not(:disabled) {
				stroke: var(--white);
				fill: var(--black);
			}

			&:disabled {
				cursor: not-allowed;
				opacity: 0.33;
				color: var(--black);
			}
		}

		& > span {
			width: 5ch;
			text-align: center;
		}
	}

	/* add button */
	& > button {
		background-color: transparent;
		border: 2px solid var(--black);
		border-radius: 2rem;
		text-transform: uppercase;
		font-size: 1.1rem;
		font-weight: 600;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		transition: var(--transition-duration) linear;
		transition-property: background-color, color;

		&:hover:not(:disabled) {
			cursor: pointer;
			color: var(--white);
			background-color: var(--black);
		}

		&:disabled {
			cursor: not-allowed;
			opacity: 0.33;
			color: var(--black);
		}
	}
`;

/* description */
export const Div_Description = styled.div`
	grid-area: description;

	& > p {
		font-size: 1.2rem;
	}

	& > a {
		font-size: 0.8rem;
		opacity: 0.5;
	}

	@media screen and (max-width: ${vars.bpCRT}) {
		margin-bottom: 1.5rem;
	}
`;
