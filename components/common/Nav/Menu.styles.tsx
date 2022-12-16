import React, { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Menu = styled(motion.div)`
	position: absolute;
	inset: 0 0 auto;
	background-color: var(--white);
	z-index: 100;
	padding: 7rem 1.5rem;

	& > div {
		display: flex;
		flex-direction: column;
		gap: 1ch;
		margin-bottom: 5rem;

		&.pages > a {
			display: block;
			text-transform: capitalize;
			font-family: var(--font-inktrap);
			font-size: 2.8rem;
		}

		&.legal > a {
			display: block;
			text-transform: capitalize;
			font-size: 1.2rem;
		}
	}
`;

interface M_Div_Menuable {
	children: React.ReactNode;
}

const M_Div_Menu = forwardRef(
	({ children }: M_Div_Menuable, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<Menu
				as={motion.div}
				ref={ref}
				key="menu"
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: "100%", opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ bounce: false, duration: 0.4 }}
			>
				{children}
			</Menu>
		);
	}
);
// will not build without displayName
M_Div_Menu.displayName = "M_Div_Menu";
export { M_Div_Menu };
