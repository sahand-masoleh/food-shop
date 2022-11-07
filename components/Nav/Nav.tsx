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
		<>
			<AnimatePresence>
				{isSearching && (
					<s.SearchFieldAnimated>
						<form action="/search">
							<input type="text" placeholder="Search" />
						</form>
					</s.SearchFieldAnimated>
				)}
			</AnimatePresence>
			<s.Header>
				<s.Nav>
					<s.ButtonContainer>
						<Link href="/#shop" passHref legacyBehavior>
							<s.A>shop</s.A>
						</Link>
						<Link href="/about" passHref legacyBehavior>
							<s.A>about</s.A>
						</Link>
						<s.Button onClick={handleIsSearching}>
							<SearchIcon />
						</s.Button>
					</s.ButtonContainer>
					<s.Logo>the figma store</s.Logo>
					<s.ButtonContainer right>
						<Link href="/cart" passHref legacyBehavior>
							<s.A>cart 0</s.A>
						</Link>
					</s.ButtonContainer>
				</s.Nav>
			</s.Header>
		</>
	);
}

export default Nav;
