import { useState } from "react";
import Image from "next/image";
import { DBProductable } from "@/types/Product";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import * as s from "./Food.styles";

const MAX_MASS = 10;

type Food = Pick<
	DBProductable,
	"name" | "type" | "price" | "description" | "source" | "noface" | "images"
>;

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "RSD",
});

export interface Foodable {
	product: Food;
	backendURL: string;
}

function Food({ product, backendURL }: Foodable) {
	const { name, type, price, description, source, noface, images } = product;
	const [active, setActive] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const formattedPrice = formatter.format(price * quantity);

	function handleMass(num: -1 | 1) {
		setQuantity((prevMass) => {
			const neuMass = prevMass + num;

			/* do not allow mass above 10kg or below 0 */
			if (neuMass <= MAX_MASS && neuMass >= 0) {
				return neuMass;
			} else {
				return prevMass;
			}
		});
	}

	const thumbMap = [noface, ...images].map((e, i) => (
		<button
			className={active === i ? "active" : null}
			onClick={() => setActive(i)}
		>
			<Image
				src={new URL(e, backendURL).toString()}
				alt={`product thumbnail`}
				height={100}
				width={100}
			/>
		</button>
	));

	return (
		<s.Main>
			<s.Div_ThumbContainer>{thumbMap}</s.Div_ThumbContainer>
			<Image
				src={new URL([noface, ...images][active], backendURL).toString()}
				alt="product"
				width={1000}
				height={1500}
			/>
			<s.Div_Details>
				<h2>{name}</h2>
				<div>
					<button onClick={() => handleMass(1)} disabled={!(quantity < 10)}>
						<Plus />
					</button>
					<span>{quantity} KG</span>
					<button onClick={() => handleMass(-1)} disabled={!(quantity > 0)}>
						<Minus />
					</button>
				</div>
				<button disabled={!(quantity > 0)}>add {formattedPrice}</button>
				<p>{description}</p>
			</s.Div_Details>
		</s.Main>
	);
}

export default Food;
