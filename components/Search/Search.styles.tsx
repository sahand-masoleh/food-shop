import styled from "styled-components";
import { maxWidth, vars } from "@/styles/globals";

export const Main = styled.main`
	padding: 7rem 1.5rem 15rem;

	& > .title {
		height: 10rem;
		display: grid;
		place-items: center;

		@media screen and (max-width: ${vars.bpTablet}) {
			height: 6rem;
			place-items: start center;
		}

		& > h1 {
			text-transform: uppercase;
			font-family: var(--font-inktrap);
			font-size: 3rem;

			@media screen and (max-width: ${vars.bpTablet}) {
				font-size: 1.4rem;
			}
		}
	}
`;
