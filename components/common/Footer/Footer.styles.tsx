import styled from "styled-components";
import { maxWidth, vars } from "@/styles/globals";

/* container */
export const Div_Footer = styled.div`
	margin-top: auto;
	padding: 0 1.5rem;
	background-color: var(--color, var(--yellow));
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

/* info */
export const Div_Info = styled.div`
	${maxWidth()}
	margin: 5rem auto;
	width: 100%;
	min-height: 16rem;
	display: grid;
	grid-template-columns: auto 2fr 1fr auto;
	grid-template-rows: 1fr auto;
	grid-template-areas:
		"badge slogan legal legal"
		"badge socials socials up";
	gap: 1rem;

	@media screen and (max-width: ${vars.bpTablet}) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: unset;
		grid-template-areas: "badge badge" "slogan up" "legal socials";
	}

	/* info > badge */
	& > svg {
		grid-area: badge;
		height: 16rem;
		padding-right: 5rem;
		color: var(--badge-color, var(--yellow));

		@media screen and (max-width: ${vars.bpTablet}) {
			padding-right: unset;
			place-self: center;
			height: min(60vw, 16rem);
		}
	}

	/* info > up */
	& > button {
		grid-area: up;
		align-self: end;
		background-color: transparent;
		border: none;
		height: 4rem;
		width: 4rem;
		cursor: pointer;
		fill: var(--black);
		transition: fill var(--transition-duration) linear;

		&:hover {
			fill: var(--white);
		}

		@media screen and (max-width: ${vars.bpTablet}) {
			justify-self: end;
			align-self: center;
			height: 3rem;
			width: 3rem;
		}
	}

	/* slogan */
	& > h3 {
		grid-area: slogan;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 600;
	}

	/* legal */
	& > .legal {
		grid-area: legal;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		& > a {
			text-transform: capitalize;
			font-size: 1.1rem;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 1rem;
			}
		}
	}

	/* socials */
	& > .socials {
		grid-area: socials;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2rem;

		@media screen and (max-width: ${vars.bpTablet}) {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		& > a {
			text-transform: uppercase;
			font-size: 1.6rem;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 1rem;
			}
		}
	}
`;

export const Div_Quote = styled.div`
	//-1.5rem margin to offset the padding on the container
	margin: 0 -1.5rem 0.5ch;
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
