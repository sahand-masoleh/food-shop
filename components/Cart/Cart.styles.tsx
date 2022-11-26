import styled from "styled-components";
import { maxWidth } from "@/styles/globals";

export const Main = styled.main`
	padding: 7rem 0 10rem;

	/* wrapper around the content */
	& > div {
		${maxWidth()};
		margin: 0 auto;

		/* itemts in cart */
		& > h3 {
			font-size: 1.8rem;
			font-weight: 600;
			margin-bottom: 1rem;
		}

		/* total */
		& > .total {
			display: flex;
			justify-content: flex-end;
			text-transform: capitalize;
			gap: 2ch;
			font-size: 1.6rem;
			margin-top: 1ch;

			/* total label */
			& > span:first-child {
				font-weight: 600;
			}
		}
	}
`;

export const Table = styled.div`
	border-top: 0.2rem solid var(--black);

	& > div {
		border-bottom: 1px solid var(--black);
	}

	& > .row {
		display: grid;
		grid-template-columns: auto repeat(3, 10rem);
		align-items: center;

		/* headers */
		&.header {
			height: 5rem;
			font-size: 1.6rem;
			font-weight: 600;
			text-transform: capitalize;
		}

		/* item column */
		& > .item {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin: 1rem 0;

			& > img {
				height: 8rem;
				width: 8rem;
				border-radius: 1rem;
				object-fit: cover;
			}

			& > span {
				text-transform: capitalize;
				font-size: 1.6rem;
				font-weight: 600;
			}
		}

		/* price column */
		& > .price {
			font-size: 1.2rem;
		}

		/* QTY column */
		& > .qty {
			& > div {
				display: flex;
				align-items: center;
				justify-content: space-between;

				& > & > span {
					flex-grow: 1;
					text-align: center;
				}
			}
		}

		/* subtotal column */
		& > .subtotal {
			text-align: right;
		}
	}
`;

// TODO: shared class with the food page
export const Button = styled.button`
	flex-shrink: 0;
	width: 3.5rem;
	height: 3.5rem;
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
`;
