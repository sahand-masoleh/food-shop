import styled from "styled-components";
import { motion } from "framer-motion";
import { vars } from "@/styles/globals";

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
interface Div_ButtonContainerable {
	right?: boolean;
}
export const Div_ButtonContainer = styled.div<Div_ButtonContainerable>`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&.hamburger {
		display: none;
		@media screen and (max-width: ${vars.bpTablet}) {
			display: unset;
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
export const A = styled.a`
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

	& > span.label {
		@media screen and (max-width: ${vars.bpTablet}) {
			display: none;
		}
	}

	&:hover {
		background-color: var(--black);
		color: var(--white);
	}
`;

/* search button */
export const Button = styled.button`
	outline: 5px solid lime;
	background-color: transparent;
	border: none;
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 0.5rem;
`;

/* search field */
const SearchField = styled(motion.div)`
	padding: 0 5rem;
	box-sizing: content-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-size: 1.8rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	overflow: hidden;
	border-bottom: var(--outline-width) solid var(--black);
	background-color: var(--white);

	& > form {
		flex-grow: 1;
		& > input {
			background-color: transparent;
			width: 100%;
			border: none;
			&:focus-visible {
				outline: none;
			}
		}
	}
`;
interface M_Div_SearchFieldable {
	children: JSX.Element;
}
export const M_Div_SearchField = ({ children }: M_Div_SearchFieldable) => {
	return (
		<SearchField
			as={motion.div}
			initial={{ height: 0 }}
			animate={{ height: "4rem" }}
			exit={{ height: 0 }}
			transition={{ bounce: false, duration: 0.2 }}
		>
			{children}
		</SearchField>
	);
};

export const Div_WIP = styled.div`
	position: absolute;
	inset: 0 0 auto;
	background-color: var(--red);
	color: var(--white);
	text-transform: uppercase;
	text-align: center;
	font-size: 0.66rem;
	font-weight: 600;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
