import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as s from "./Nav.styles";
import SearchIcon from "@/assets/icons/search.svg";

function Nav() {
	const [isSearching, setIsSearching] = useState(false);

	function handleIsSearching() {
		setIsSearching((prevIsSearching) => !prevIsSearching);
	}

	return (
		<s.Header>
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
					<s.Button onClick={handleIsSearching}>
						<SearchIcon />
					</s.Button>
				</s.Div_ButtonContainer>
				<s.Logo>the food shop</s.Logo>
				<s.Div_ButtonContainer right>
					<Link href="/cart" passHref legacyBehavior>
						<s.A>cart 0</s.A>
					</Link>
				</s.Div_ButtonContainer>
			</s.Nav>
		</s.Header>
	);
}

export default Nav;
