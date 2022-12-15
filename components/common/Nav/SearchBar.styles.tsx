import styled from "styled-components";
import { motion } from "framer-motion";
import { vars } from "@/styles/globals";
import React from "react";

/* search field */
const Field = styled(motion.div)`
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

	@media screen and (max-width: ${vars.bpTablet}) {
		padding: 0 1.5rem;
	}

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
interface M_Div_Fieldable {
	children: React.ReactNode;
}
export const M_Div_Field = ({ children }: React.PropsWithChildren) => {
	return (
		<Field
			as={motion.div}
			initial={{ height: 0 }}
			animate={{ height: "4rem" }}
			exit={{ height: 0 }}
			transition={{ duration: 0.2, ease: "linear" }}
		>
			{children}
		</Field>
	);
};
