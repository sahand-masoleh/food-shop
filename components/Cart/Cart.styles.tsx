import styled from "styled-components";
import { maxWidth } from "@/styles/globals";

export const Main = styled.main`
	${maxWidth()};
	width: 100%;
	margin: 0 auto;
	padding: 10rem 0;

	/* itemts in cart */
	& > h3 {
		font-size: 1.8rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	/* total */
	& > div {
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
`;

export const Table = styled.table`
	width: 100%;
	border-top: 0.2rem solid var(--black);
	border-collapse: collapse;

	/* subtotal column */
	& td:last-child {
		text-align: right;
		width: 0;
	}

	/* all cells */
	& tr {
		border-bottom: 1px solid var(--black);
	}

	/* DATA ROWS */

	/* headers */
	& > thead > tr > th {
		height: 5rem;
		font-size: 1.6rem;
		font-weight: 600;
		text-transform: capitalize;
		text-align: left;

		/* last header */
		&:last-child {
			text-align: right;
		}
	}

	/* all rows */
	& > tbody > tr {
		/* cells of items */
		& > td {
			margin: 1rem 0;
		}

		/* item column */
		& > .item {
			display: flex;
			align-items: center;
			gap: 1rem;

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
			width: 15%;
		}

		/* QTY column */
		& > .qty {
			width: 15%;

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
	}
`;

// TODO: shared class with the food page
export const Button = styled.button`
	flex-shrink: 0;
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
`;
