import styled from "styled-components";
import { maxWidth, vars } from "@/styles/globals";

export const Main = styled.main`
	padding: 7rem 1.5rem 10rem;

	/* wrapper around the content */
	& > div {
		${maxWidth()};
		margin: 0 auto;

		/* itemts in cart */
		& > h3 {
			font-size: 1.8rem;
			font-weight: 600;
			margin-bottom: 1rem;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 1.2rem;
			}
		}

		/* total */
		& > .total {
			display: flex;
			justify-content: flex-end;
			text-transform: capitalize;
			gap: 2ch;
			font-size: 1.6rem;
			margin-top: 1ch;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 1.2rem;
			}

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
		grid-template-columns: min-content auto 8rem 12rem 8rem;
		grid-template-areas: "delete item price qty subtotal";
		column-gap: 1rem;
		align-items: center;

		@media screen and (max-width: ${vars.bpCRT}) {
			grid-template-columns: auto minmax(0, min-content) minmax(0, min-content);
			grid-template-areas:
				"item item delete"
				"qty price subtotal";
			padding: 1rem;

			&:not(:first-child) {
				gap: 1rem;
			}
		}

		/* headers */
		&.header {
			height: 5rem;
			font-weight: 600;
			text-transform: capitalize;

			@media screen and (max-width: ${vars.bpCRT}) {
				height: unset;
			}

			/* all the header text */
			& > span {
				font-size: 1.6rem;

				@media screen and (max-width: ${vars.bpTablet}) {
					font-size: 1.2rem;
				}

				@media screen and (max-width: ${vars.bpCRT}) {
					:not(.item) {
						display: none;
					}
				}
			}

			// since the header row has no delete
			& > .item {
				grid-column: span 2;
			}
		}

		/* delete button */
		// the rest of the styling is defined elsewhere
		& > .delete {
			grid-area: delete;
			width: 3rem;
			height: 3rem;

			@media screen and (max-width: ${vars.bpCRT}) {
				margin-left: auto;
			}
		}

		/* item column */
		& > .item {
			grid-area: item;
			display: flex;
			align-items: center;
			gap: 1rem;
			margin: 1rem 0;

			@media screen and (max-width: ${vars.bpCRT}) {
				margin: unset;
			}

			& > img {
				height: 8rem;
				width: 8rem;
				border-radius: 1rem;
				object-fit: cover;

				@media screen and (max-width: ${vars.bpCRT}) {
					height: 5rem;
					width: 5rem;
				}
			}

			& > span {
				text-transform: capitalize;
				font-size: 1.6rem;
				font-weight: 600;

				@media screen and (max-width: ${vars.bpTablet}) {
					font-size: 1.2rem;
				}
			}
		}

		/* price column */
		& > .price {
			grid-area: price;
			font-size: 1rem;

			@media screen and (max-width: ${vars.bpCRT}) {
				opacity: 0.5;
			}
		}

		/* QTY column */
		& > .qty {
			grid-area: qty;

			// wrapper div to avoid sytling the header
			& > div {
				display: flex;
				align-items: center;
				justify-content: space-between;

				@media screen and (max-width: ${vars.bpCRT}) {
					max-width: 10rem;
				}

				& > span {
					flex-grow: 1;
					text-align: center;
				}

				/* plus and minus buttons */
				// the rest of the styling is defined elsewhere
				& > button {
					height: 4rem;
					width: 4rem;

					@media screen and (max-width: ${vars.bpCRT}) {
						width: 3rem;
						height: 3rem;
					}
				}
			}
		}

		/* subtotal column */
		& > .subtotal {
			grid-area: subtotal;
			font-size: 1rem;
			text-align: right;

			@media screen and (max-width: ${vars.bpCRT}) {
				text-align: unset;
				font-weight: 800;
			}
		}
	}
`;

// TODO: shared class with the food page
export const Button = styled.button`
	flex-shrink: 0;
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
