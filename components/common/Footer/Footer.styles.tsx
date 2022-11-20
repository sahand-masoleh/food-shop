import styled from "styled-components";
import { maxWidth } from "@/styles/globals";

export const Div_Footer = styled.div`
	height: 26rem;
	background-color: var(--color, var(--yellow));
	display: flex;
	flex-direction: column;
`;

export const Div_Info = styled.div`
	${maxWidth()}
	margin: 3rem auto;
	width: 100%;
	display: flex;
	flex-grow: 1;

	& > svg {
		height: 18rem;
		color: var(--badge-color, var(--yellow));
	}
`;

export const Div_Quote = styled.div`
	margin-top: auto;
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
