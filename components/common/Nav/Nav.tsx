import { useState, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import * as s from "./Nav.styles";
import SearchIcon from "@/assets/icons/search.svg";
import Hamburger from "./Hamburger";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";

function Nav() {
	const [isSearching, setIsSearching] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { cart } = useContext(CartContext);

	function handleOpen(bool?: boolean) {
		if (bool !== undefined) {
			setIsOpen(bool);
		} else {
			setIsOpen((prevOpen) => !prevOpen);
		}
	}

	function handleSearching(bool?: boolean) {
		if (bool !== undefined) {
			setIsSearching(bool);
		} else {
			setIsSearching((prevIsSearching) => !prevIsSearching);
		}
	}

	return (
		<s.Header>
			<AnimatePresence>
				{isSearching && <SearchBar close={() => handleSearching(false)} />}
			</AnimatePresence>
			<s.Nav>
				{/* desktop only */}
				<s.Div_ButtonContainer className="hamburger">
					<Hamburger handleOpen={handleOpen} isOpen={isOpen} />
					<s.Button onClick={() => handleSearching()}>
						<SearchIcon />
					</s.Button>
				</s.Div_ButtonContainer>

				{/* tablet and mobile only */}
				<s.Div_ButtonContainer className="left">
					<Link href="/#shop" passHref legacyBehavior>
						<s.A>shop</s.A>
					</Link>
					<Link href="/about" passHref legacyBehavior>
						<s.A>about</s.A>
					</Link>
					<s.Button onClick={() => handleSearching()}>
						<SearchIcon />
					</s.Button>
				</s.Div_ButtonContainer>

				<s.Logo>
					<Link onClick={() => handleOpen(false)} href="/">
						the food shop
					</Link>
				</s.Logo>

				<s.Div_ButtonContainer className="right">
					<Link href="/cart" passHref legacyBehavior>
						<s.A>
							<span className="label">cart</span> <span>{cart.length}</span>
						</s.A>
					</Link>
				</s.Div_ButtonContainer>
			</s.Nav>
		</s.Header>
	);
}

export default Nav;
