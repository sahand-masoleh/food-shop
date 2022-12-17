import { useState, useEffect } from "react";
import Badge01 from "@/assets/badges/footer-badge-01.svg";
import Badge02 from "@/assets/badges/footer-badge-02.svg";
import Badge03 from "@/assets/badges/footer-badge-03.svg";
import Badge04 from "@/assets/badges/footer-badge-04.svg";
import Badge05 from "@/assets/badges/footer-badge-05.svg";
import * as s from "./Footer.styles";

interface Badgeable {
	color: string;
	path: string;
}

const badges: React.FC<React.SVGProps<SVGSVGElement>>[] = [
	Badge01,
	Badge02,
	Badge03,
	Badge04,
	Badge05,
];

// path is passed in to force a rerender and randomize the shape on route change
function Badge({ color, path }: Badgeable) {
	const [number, setNumber] = useState(0);
	useEffect(() => {
		setNumber(Math.floor(Math.random() * badges.length));
	}, [path]);

	const Badge = badges[number];

	return (
		<s.M_Div className="badge">
			<Badge
				style={{ "--badge-color": `var(--${color})` } as React.CSSProperties}
			/>
		</s.M_Div>
	);
}

export default Badge;
