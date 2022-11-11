import styled from "styled-components";
import { maxWidth } from "@/styles/globals";

export const Div_Intro = styled.div`
	${maxWidth("30ch")}
	margin: 10rem auto;
	font-family: var(--font-inktrap);
	font-size: 3.4rem;
	text-transform: uppercase;
	text-align: center;
	line-height: 2ch;

	& > * {
		transition: opacity linear;
		transition-duration: var(--transition-duration);
	}

	&:hover {
		& > *:not(.focus) {
			opacity: 0.5;
		}
	}

	& > span {
		&:where(.focus) {
			text-decoration: underline;
		}
		&:not(:last-of-type) {
			margin-right: 0.5ch;
		}
	}

	& > svg {
		display: inline;
		object-fit: contain;
		height: 1ch;
		width: auto;
		margin-right: 0.5ch;
	}
`;

// Forestation Badge
export const Div_ForestationBadge = styled.div`
	position: absolute;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	background-color: var(--);
	z-index: 100;
`;
