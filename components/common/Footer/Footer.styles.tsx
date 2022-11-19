import styled, { css } from "styled-components";

export const Div_Footer = styled.div`
	height: 26rem;
	background-color: var(--color, var(--yellow));
	display: flex;
	flex-direction: column;
`;

export const Div_Quote = styled.div`
	margin-top: auto;
	margin-bottom: 0.5ch;
	display: flex;
	position: relative;
	overflow: scroll;

	// each set
	& > div {
		flex-shrink: 0;
		padding-right: 1ch;
		display: flex;
		gap: 0.5ch;
		position: relative;
		left: var(--left);

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
				width: 1.6rem;
				--fill: var(--white);
			}
		}
	}
`;
