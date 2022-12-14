import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import * as s from "./SearchBar.styles";

interface Searchable {
	isSearching: boolean;
	close: () => void;
}

function SearchBar({ isSearching, close }: Searchable) {
	const [value, setvalue] = useState("");
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeComplete", () => {
			close();

			/* manual reload needed if called from /search */
			if (router.pathname === "/search") {
				router.reload();
			}
		});

		return () => router.events.off("routeChangeComplete", close);
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
		<AnimatePresence>
			{isSearching && (
				<s.M_Div_Field>
					<form
						onSubmit={handleSubmit}
						role="search"
						aria-label="search this site"
					>
						<input
							type="text"
							placeholder="Search"
							onChange={handleInput}
							value={value}
						/>
					</form>
				</s.M_Div_Field>
			)}
		</AnimatePresence>
	);
}

export default SearchBar;
