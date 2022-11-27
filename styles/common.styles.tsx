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
