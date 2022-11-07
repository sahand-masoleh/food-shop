import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
	padding: 1.5rem 5rem;
`;

export const Nav = styled.nav`
	display: flex;
`;

export const Logo = styled.span`
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: 500;
`;

interface ButtonContainerable {
	right?: boolean;
}
export const ButtonContainer = styled.div<ButtonContainerable>`
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

export const Button = styled.button`
	background-color: transparent;
	border: none;
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 0.5rem;
`;

const SearchField = styled(motion.div)`
	padding: 0 5rem;
	box-sizing: content-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-size: 2rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	overflow: hidden;
	border-bottom: 0.2rem solid var(--black);

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
interface SearchFieldAnimatedable {
	children: JSX.Element;
}
export const SearchFieldAnimated = ({ children }: SearchFieldAnimatedable) => {
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
