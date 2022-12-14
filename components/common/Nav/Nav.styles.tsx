import styled from "styled-components";
import { motion } from "framer-motion";
import { vars } from "@/styles/globals";
import { A_LinkButton } from "@/styles/common.styles";

/* header */
export const Header = styled.header`
	position: absolute;
	width: 100%;
	z-index: 200;
`;

/* nav */
export const Nav = styled.nav`
	height: 5rem;
	padding: 0 5rem;
	display: flex;
	align-items: center;

	@media screen and (max-width: ${vars.bpTablet}) {
		padding: 0 1.5rem;
	}
`;

/* logo */
export const Logo = styled.span`
	text-transform: uppercase;
	font-size: clamp(1rem, 2vw, 1.5rem);
	font-weight: 500;
	padding: 0 1ch;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

/* button containers */
export const Div_ButtonContainer = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&.hamburger {
		display: none;
		@media screen and (max-width: ${vars.bpTablet}) {
			display: flex;
		}
	}

	&.left {
		@media screen and (max-width: ${vars.bpTablet}) {
			display: none;
		}
	}

	&.right {
		justify-content: flex-end;
	}

	& > :is(a, button):hover {
		cursor: pointer;
	}
`;

/* each link button in the header */
export const A = A_LinkButton;

export const Button = styled.button`
	/* search button */
	background-color: transparent;
	border: none;
	height: 1rem;
	width: 1rem;
	margin-left: 0.5rem;
`;
