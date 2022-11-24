import { useContext, useState } from "react";
import Image from "next/image";
import { DBProductable } from "@/types/Product";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import { CartContext, MAX_QTY } from "@/contexts/CartContext";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import * as s from "./Food.styles";

type Food = Pick<
	DBProductable,
	| "id"
	| "name"
	| "type"
	| "price"
	| "description"
	| "source"
	| "noface"
	| "images"
>;

export interface Foodable {
	product: Food;
	backendURL: string;
}

function Food({ product, backendURL }: Foodable) {
	const { id, name, type, price, description, source, noface, images } =
		product;
	const [active, setActive] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const { cart, addItem } = useContext(CartContext);
	const formattedTotalPrice = useFormattedPrice(price * quantity);

	function handleQuantity(num: -1 | 1) {
		setQuantity((prevQTY) => {
			const neuQTY = prevQTY + num;

			/* do not allow mass above max or below 0 */
			if (neuQTY < 0 || neuQTY > MAX_QTY) {
				return prevQTY;
			} else {
				return neuQTY;
			}
		});
	}

	function addItemLocal() {
		const prevQuantity = cart.find((e) => e.id === id)?.quantity || 0;
		addItem(id, prevQuantity + quantity);
	}

	const thumbMap = [noface, ...images].map((e, i) => (
		<button
			key={i}
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
					<button
						onClick={() => handleQuantity(1)}
						disabled={quantity >= MAX_QTY}
					>
						<Plus />
					</button>
					<span>{quantity} kg</span>
					<button onClick={() => handleQuantity(-1)} disabled={quantity <= 1}>
						<Minus />
					</button>
				</div>
				<button disabled={!(quantity > 0)} onClick={addItemLocal}>
					{/* TODO: put formattedPrice in useEffect */}
					add {formattedTotalPrice}
				</button>
				<p>{description}</p>
			</s.Div_Details>
		</s.Main>
	);
}

export default Food;
