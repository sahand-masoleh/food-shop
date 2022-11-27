import styled from "styled-components";

export const Button = styled.button`
	width: 2.5rem;
	height: 2.5rem;
	display: grid;
	place-content: center;
	background-color: transparent;
	border: none;
	z-index: 100;
`;

export const Hamburger = styled.svg`
	width: inherit;
	height: inherit;
	stroke-width: 5;

	& > :where(#top, #middle, #bottom) {
		transition: var(--transition-duration) linear;
		transition-property: opacity, rotate, translate;
		transform-origin: 50% 50%;
	}

	& > #top {
		translate: 0 -10%;
	}

	& > #bottom {
		translate: 0 10%;
	}

	&[data-open="true"] {
		& > #middle {
			opacity: 0;
		}

		& > #top {
			translate: 0;
			rotate: -45deg;
		}

		& > #bottom {
			translate: 0;
			rotate: 45deg;
		}
	}
`;
