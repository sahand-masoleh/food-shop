import { maxWidth, vars } from "@/styles/globals";
import styled from "styled-components";

export const Main = styled.main`
	padding: 7rem 1.5rem 10rem;

	& > div {
		${maxWidth()}
		margin: 0 auto;

		& > h1 {
			font-family: var(--font-inktrap);
			margin-bottom: 1ch;
			font-size: 3rem;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 2rem;
			}
		}

		& > h2 {
			font-size: 2rem;
			margin-bottom: 1ch;
		}

		& > p {
			font-size: 1.2rem;
			margin-bottom: 1ch;
		}

		& > ul > li {
			margin-left: 3rem;
			font-size: 1.2rem;
		}

		& .em {
			font-weight: 600;
		}

		& a {
			font-weight: 600;
			text-decoration: underline;
		}
	}
`;

interface A_LinkButtonable {
	black?: boolean;
}

export const A_LinkButton = styled.a<A_LinkButtonable>`
	padding: 0.33rem 1.2rem;
	display: grid;
	place-items: center;
	border-radius: 2rem;
	border: 2px solid var(--black);
	font-size: 0.875rem;
	font-weight: 500;
	text-transform: uppercase;
	display: flex;
	gap: 1ch;
	transition: 250ms linear;
	transition-property: background-color, color;
	background-color: ${(props) =>
		props.black ? "var(--black)" : "transparent"};
	color: ${(props) => (props.black ? " var(--white)" : "var(--black)")};

	& > span.label {
		@media screen and (max-width: ${vars.bpTablet}) {
			display: none;
		}
	}

	&:hover {
		background-color: ${(props) =>
			props.black ? "var(--white)" : "var(--black)"};
		color: ${(props) => (props.black ? " var(--black)" : "var(--white)")};
	}
`;
