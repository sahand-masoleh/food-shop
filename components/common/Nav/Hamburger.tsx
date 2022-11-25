import { useState } from "react";
import * as s from "./Hamburger.styles";

function Hamburger() {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpen() {
		setIsOpen((prevOpen) => !prevOpen);
	}

	return (
		<s.Button onClick={handleOpen}>
			<s.Hamburger
				data-open={isOpen}
				viewBox="0 0 100 100"
				version="1.1"
				width="100"
				height="100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="top"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					// d="M 32.622132,39.999635 H 67.377868"
					d="M 32.622132,50 H 67.377868"
				/>
				<path
					id="middle"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M 32.622132,50 H 67.377868"
				/>
				<path
					id="bottom"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					// d="M 32.622132,59.999635 H 67.377868"
					d="M 32.622132,50 H 67.377868"
				/>
				<path
					fill="none"
					stroke="currentColor"
					strokeMiterlimit="10"
					d="M 96.49988,49.999999 C 96.49988,24.328192 75.671808,3.5001196 49.999999,3.5001196 24.328191,3.5001196 3.5001196,24.328192 3.5001196,49.999999 3.5001196,75.671808 24.328191,96.49988 49.999999,96.49988 75.671808,96.49988 96.49988,75.671808 96.49988,49.999999 Z"
					id="ring"
				/>
			</s.Hamburger>
		</s.Button>
	);
}

export default Hamburger;
