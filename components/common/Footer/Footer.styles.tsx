import styled from "styled-components";
import { maxWidth } from "@/styles/globals";

export const Div_Footer = styled.div`
	height: 26rem;
	background-color: var(--color, var(--yellow));
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Div_Info = styled.div`
	${maxWidth()}
	margin: auto auto;
	width: 100%;
	height: 16rem;
	display: grid;
	grid-template-columns: auto 2fr 1fr auto;
	grid-template-rows: 1fr auto;
	grid-template-areas:
		"badge slogan legal legal"
		"badge socials socials up";
	gap: 1rem;

	& > svg {
		grid-area: badge;
		height: inherit;
		padding-right: 5rem;
		color: var(--badge-color, var(--yellow));
	}

	& > button {
		grid-area: up;
		align-self: end;
		background-color: transparent;
		border: none;
		height: 4rem;
		width: 4rem;
		cursor: pointer;
		color: var(--black);
		transition: color var(--transition-duration) linear;

		&:hover {
			color: var(--white);
		}
	}

	& > h3 {
		grid-area: slogan;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 600;
	}

	& > .legal {
		grid-area: legal;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > a {
			text-transform: capitalize;
			font-size: 1.1rem;
		}
	}

	& > .socials {
		grid-area: socials;
		display: flex;
		align-items: center;
		gap: 2rem;

		& > a {
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
`;

export const Div_Quote = styled.div`
	margin-bottom: 0.5ch;
	display: flex;
	position: relative;
	overflow: hidden;
	color: var(--black);

	// each set
	& > div {
		flex-shrink: 0;
		padding-right: 1ch;
		display: flex;
		justify-content: flex-end;
		gap: 0.5ch;
		overflow: hidden;

		animation: shrink 30s linear infinite;
		@keyframes shrink {
			from {
				translate: 0 0;
			}

			to {
				translate: -100% 0;
			}
		}

		// each word and image
		& > div {
			text-transform: uppercase;
			font-size: 1.6rem;
			font-weight: 600;
			display: flex;
			gap: inherit;
			align-items: center;
			line-height: 1.6rem;

			& > svg {
				display: block;
				flex-shrink: 0;
				height: 1.6rem;
				min-width: 1.6rem;
				--fill: var(--white);
			}
		}
	}
`;
