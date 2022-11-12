import styled from "styled-components";
import { motion } from "framer-motion";

/* header */
export const Header = styled.header`
	position: absolute;
	width: 100%;
	z-index: 100;
`;

/* header > nav */
export const Nav = styled.nav`
	height: 5rem;
	padding: 0 5rem;
	display: flex;
	align-items: center;
`;

/* header > nav > logo */
export const Logo = styled.span`
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: 500;
`;

/* header > nav > button-container */
interface Div_ButtonContainerable {
	right?: boolean;
}
export const Div_ButtonContainer = styled.div<Div_ButtonContainerable>`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
	gap: 0.5rem;

	& > :is(a, button):hover {
		cursor: pointer;
	}
`;

/* header > nav > button-container > a */
export const A = styled.a`
	padding: 0.33rem 1.2rem;
	display: grid;
	place-items: center;
	border-radius: 2rem;
	border: 2px solid var(--black);
	font-size: 0.875rem;
	font-weight: 500;
	text-transform: uppercase;
	display: grid;
	transition: 250ms linear;
	transition-property: background-color, color;

	&:hover {
		background-color: var(--black);
		color: var(--white);
	}
`;

/* header > nav > button-container > button */
export const Button = styled.button`
	background-color: transparent;
	border: none;
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 0.5rem;
`;

/* header > search-field */
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
