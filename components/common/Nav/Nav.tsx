import { useState, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as s from "./Nav.styles";
import SearchIcon from "@/assets/icons/search.svg";

function Nav() {
	const [isSearching, setIsSearching] = useState(false);
	const { cart } = useContext(CartContext);

	function handleIsSearching() {
		setIsSearching((prevIsSearching) => !prevIsSearching);
	}

	return (
		<s.Header>
			{/* TODO: remove WIP */}
			<s.Div_WIP>this project is incomplete and a work in progress</s.Div_WIP>
			<AnimatePresence>
				{isSearching && (
					<s.M_Div_SearchField>
						<form action="/search">
							<input type="text" placeholder="Search" />
						</form>
					</s.M_Div_SearchField>
				)}
			</AnimatePresence>
			<s.Nav>
				<s.Div_ButtonContainer>
					<Link href="/#shop" passHref legacyBehavior>
						<s.A>shop</s.A>
					</Link>
					<Link href="/about" passHref legacyBehavior>
						<s.A>about</s.A>
					</Link>
					{/* TODO: implement serach */}
					{/* <s.Button onClick={handleIsSearching}>
						<SearchIcon />
					</s.Button> */}
				</s.Div_ButtonContainer>
				<s.Logo>the food shop</s.Logo>
				<s.Div_ButtonContainer right>
					<Link href="/cart" passHref legacyBehavior>
						<s.A>cart {cart.length}</s.A>
					</Link>
				</s.Div_ButtonContainer>
			</s.Nav>
		</s.Header>
	);
}

export default Nav;
