import { vars } from "@/styles/globals";
import styled from "styled-components";

export const Main = styled.main`
	padding: 0 1.5rem;
	margin-bottom: 10rem;
	display: flex;
	flex-direction: column;
	gap: 10rem;

	@media screen and (max-width: ${vars.bpTablet}) {
		margin-bottom: 5rem;
		gap: 5rem;
	}
`;
