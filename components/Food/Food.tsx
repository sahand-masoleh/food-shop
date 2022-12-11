import { useContext, useState } from "react";
// Image from Next must be renamed because the built-in JS Image object is also used
import NextImage from "next/image";
import { useRouter } from "next/router";
import { DBProductable } from "@/types/Product";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import { CartContext, MAX_QTY } from "@/contexts/CartContext";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import useGrabScroll from "@/hooks/useGrabScroll";
import * as s from "./Food.styles";

const CDN = process.env.NEXT_PUBLIC_CDN;

/* PAGE */
// the page consists of one wrapper component
// the content inside changed based on view width

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
}

function Food({ product }: Foodable) {
	const { id, name, type, price, description, source, noface, images } =
		product;
	/* active image */
	const [active, setActive] = useState(0);
	/* quantity selected by the user (local) */
	const [quantity, setQuantity] = useState(1);
	/* cart context */
	const { cart, addItem } = useContext(CartContext);
	/* calculate the price in the correct currency format*/
	const formattedTotalPrice = useFormattedPrice(price * quantity);
	/* navigate to cart after add */
	const router = useRouter();

	/* setting the local quantity */
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

	/* wrapper for adding items to cart with id*/
	function addItemLocal() {
		/* has to be pure to avoid adding twice on strict mode */
		const prevQuantity = cart.find((e) => e.id === id)?.quantity || 0;
		addItem(id, prevQuantity + quantity);
		router.push("/cart");
	}

	/* only on desktop */
	const thumbMap = [noface, ...images].map((e, i) => (
		<button
			key={i}
			className={active === i ? "active" : null}
			onClick={() => setActive(i)}
			aria-label="thumbnail"
		>
			<NextImage
				src={new URL(e, CDN).toString()}
				alt={`${name} thumbnail`}
				height={100}
				width={100}
			/>
		</button>
	));

	return (
		<s.Main>
			<div>
				{/* only on desktop */}
				<s.Div_ThumbContainer>{thumbMap}</s.Div_ThumbContainer>
				<s.Div_ActiveImage>
					<NextImage
						src={new URL([noface, ...images][active], CDN).toString()}
						alt={name}
						width={1000}
						height={1500}
					/>
				</s.Div_ActiveImage>

				{/* only on < 1024px */}
				<ImageContainer
					imageURLs={[noface, ...images].map((e) => new URL(e, CDN).toString())}
				/>

				<s.Div_Title>
					<span>{type}</span>
					<h2>{name}</h2>
				</s.Div_Title>
				<s.Div_QuantitySelector>
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
				</s.Div_QuantitySelector>
				<s.Div_Description>
					<p>{description}</p>
					<a href={source} target="_blank" rel="noreferrer">
						source {source}
					</a>
				</s.Div_Description>
			</div>
		</s.Main>
	);
}

export default Food;

/* IMAGE CONTAINER for < 1024px */

interface ImageContainerable {
	imageURLs: string[];
}

function ImageContainer({ imageURLs }: ImageContainerable) {
	const { handleMouseMove, containerRef } = useGrabScroll();

	const imageMap = imageURLs.map((url, i) => (
		<NextImage key={i} src={url} alt="TODO" width={480} height={640} />
	));

	return (
		<s.Div_ImageContainer
			ref={containerRef}
			onDragStart={handleMouseMove}
			onDragOver={handleMouseMove}
			draggable={true}
		>
			{imageMap}
		</s.Div_ImageContainer>
	);
}
