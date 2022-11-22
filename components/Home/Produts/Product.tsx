import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import * as s from "./Producs.styles";
import { DBProductable } from "@/types/Product";

export type Productable = Pick<DBProductable, "name" | "cover" | "slices">;

function Product({ name, cover, slices }: Productable) {
	const [hovered, setHovered] = useState(false);

	function handleHover() {
		setHovered((prevHoevered) => !prevHoevered);
	}

	return (
		<s.DIV_Product onMouseEnter={handleHover} onMouseLeave={handleHover}>
			<Link href={`/products/${name}`}>
				<Image
					src={cover}
					alt={name}
					width={320}
					height={480}
					key={name + "_unhovered"}
				/>
				<AnimatePresence mode="wait">
					{hovered && (
						<s.M_Image
							src={slices}
							alt={name}
							width={320}
							height={480}
							key={name + "_hovered"}
						/>
					)}
				</AnimatePresence>
			</Link>
			<span>{name}</span>
		</s.DIV_Product>
	);
}

export default Product;
