import styled from "styled-components";
import { maxWidth, vars } from "@/styles/globals";

export const Div_Intro = styled.div`
	${maxWidth("68rem")}
	margin: 0 auto;
	position: relative;

	& > .text-container {
		margin: 0 1rem;
		font-family: var(--font-inktrap);
		font-size: 3.4rem;
		text-transform: uppercase;
		text-align: center;
		line-height: 2ch;

		@media screen and (max-width: ${vars.bpTablet}) {
			font-size: 1.8rem;
		}

		& > * {
			transition: opacity var(--transition-duration) linear;
		}

		&:hover {
			& > :where(span, svg):not(.focus) {
				opacity: 0.5;
			}
		}

		& > span {
			&:not(:last-of-type) {
				margin-right: 0.5ch;
			}
			&:where(.focus) {
				text-decoration: underline;
			}
		}

		& > svg {
			display: inline;
			object-fit: contain;
			height: 1ch;
			width: auto;
			margin-right: 0.5ch;
		}
	}
`;

// Forestation Badge
export const A_ReforestationBadge = styled.a`
	position: absolute;
	top: 0;
	right: 0;
	translate: 0 -50%;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	background-color: var(--white);
	outline: var(--outline-width) solid var(--black);
	z-index: 100;
	display: grid;
	place-items: center;

	& > .text {
		position: absolute;
		animation: spin 10s linear infinite;

		@keyframes spin {
			to {
				rotate: 360deg;
			}
		}
	}

	& > .hand {
		height: 45%;
		width: auto;
		transition: 0.33s ease;
	}
	& > .hand--1 {
		color: var(--yellow);
		position: absolute;
		translate: -20% 0;
		rotate: -30deg;
		pointer-events: none;
		transition-property: translate;

		&.hover {
			translate: -40% 0%;
		}
	}

	& > .hand--2 {
		color: var(--purple);
		position: absolute;
		pointer-events: none;
		rotate: 30deg;
		opacity: 0;
		translate: 75% 30%;
		scale: -1 0.9;
		transition-property: translate, opacity, scale;

		&.hover {
			opacity: 1;
			translate: 55% 20%;
			scale: -1 1;
		}
	}

	& > .hit {
		position: absolute;
		height: 1rem;
		rotate: 20deg;
		opacity: 0;
		top: 30%;
		left: 60%;
		scale: -1 0.9;
		transition: 0.33s ease;
		transition-property: top, left, opacity, scale;

		&.hover {
			opacity: 1;
			top: 25%;
			left: 55%;
			scale: -1 1;
		}
	}
`;
