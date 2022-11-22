import { maxWidth } from "@/styles/globals";
import styled from "styled-components";

export const Main = styled.main`
	${maxWidth()}
	margin: 0 auto 10rem;
	padding-top: 10rem;
	display: flex;
	gap: 1.5rem;

	/* active image */
	& > img {
		height: 56rem;
		width: 38rem;
		object-fit: cover;
		border-radius: 8rem;
	}
`;

/* thumbnail container */
export const Div_ThumbContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-shrink: 0;

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

/* details */
export const Div_Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-left: 2rem;
	color: var(--black);
	flex-grow: 1;

	& > h2 {
		text-transform: capitalize;
		font-family: var(--font-inktrap);
		font-size: 3rem;
		font-weight: unset;
		margin-bottom: 1rem;
	}

	/* quantity selector */
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

	/* description */
	& > p {
		font-size: 1.2rem;
	}
`;
