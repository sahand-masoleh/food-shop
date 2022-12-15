import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import * as s from "./SearchBar.styles";

interface Searchable {
	close: () => void;
}

function SearchBar({ close }: Searchable) {
	const [value, setvalue] = useState("");
	const router = useRouter();
	const ref = useRef<HTMLInputElement>();

	useEffect(() => {
		ref.current.focus();

		/* close the bar after route change */
		/* includes both submit and click on link */
		router.events.on("routeChangeComplete", () => {
			close();
		});

		return () => {
			router.events.off("routeChangeComplete", close);
		};
	}, []);

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setvalue(e.target.value);
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const searchParams = new URLSearchParams();
		searchParams.append("keyword", value);
		router.push("/search?" + searchParams.toString());
		setvalue("");
	}

	return (
		<s.M_Div_Field>
			<form onSubmit={handleSubmit} role="search" aria-label="search this site">
				<input
					type="text"
					placeholder="Search"
					onChange={handleInput}
					value={value}
					ref={ref}
				/>
			</form>
		</s.M_Div_Field>
	);
}

export default SearchBar;
