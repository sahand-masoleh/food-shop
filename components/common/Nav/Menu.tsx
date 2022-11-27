import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as s from "./Menu.styles";

/*
    THE MOBILE MENU
    rendered by the hamburger button itself
    but attaches to the app, same level as nav and footer
*/

export interface Menuable {
	isOpen: boolean;
	handleOpen: (bool?: boolean) => void;
}

function Menu({ isOpen, handleOpen }: Menuable) {
	const loaded = useRef(false);
	const observer = useRef<IntersectionObserver>();
	const containerRef = useRef<HTMLDivElement>();

	useEffect(() => {
		loaded.current = true;

		return () => observer.current?.disconnect();
	}, []);

	useEffect(() => {
		if (isOpen) {
			observer.current = new IntersectionObserver(handleIntersection, {
				threshold: 1,
			});
			observer.current.observe(containerRef.current);
		}
	}, [isOpen]);

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		if (!entries[0].isIntersecting) {
			handleOpen(false);
		}
	}

	if (loaded.current) {
		return createPortal(
			<AnimatePresence mode="wait">
				{isOpen && (
					<s.M_Div_Menu ref={containerRef}>
						<div className="pages">
							<Link onClick={() => handleOpen(false)} href="./#shop">
								shop
							</Link>
							<Link onClick={() => handleOpen(false)} href="./about">
								about
							</Link>
						</div>
						<div className="legal">
							<Link onClick={() => handleOpen(false)} href="./attribution">
								attribution
							</Link>
							<Link onClick={() => handleOpen(false)} href="./about">
								about
							</Link>
						</div>
					</s.M_Div_Menu>
				)}
			</AnimatePresence>,
			document.querySelector("#__next")
		);
	}
}

export default Menu;
