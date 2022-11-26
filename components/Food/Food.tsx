import { useContext, useState, useRef } from "react";
// Image from Next must be renamed because the built-in JS Image object is also used
import NextImage from "next/image";
import { DBProductable } from "@/types/Product";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import { CartContext, MAX_QTY } from "@/contexts/CartContext";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import * as s from "./Food.styles";

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
	backendURL: string;
}

function Food({ product, backendURL }: Foodable) {
	const { id, name, type, price, description, source, noface, images } =
		product;
	/* active image */
	const [active, setActive] = useState(0);
	/* quantity selected by the user (local) */
	const [quantity, setQuantity] = useState(1);
	/* cart context */
	const { cart, addItem } = useContext(CartContext);
	/* calculated price in the correct currency format*/
	const formattedTotalPrice = useFormattedPrice(price * quantity);

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
	}

	/* only on desktop */
	const thumbMap = [noface, ...images].map((e, i) => (
		<button
			key={i}
			className={active === i ? "active" : null}
			onClick={() => setActive(i)}
		>
			<NextImage
				src={new URL(e, backendURL).toString()}
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
						src={new URL([noface, ...images][active], backendURL).toString()}
						alt={name}
						width={1000}
						height={1500}
					/>
				</s.Div_ActiveImage>

				{/* only on < 1024px */}
				<ImageContainer
					imageURLs={[noface, ...images].map((e) =>
						new URL(e, backendURL).toString()
					)}
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
					<a href={source} target="_blank">
						source {source}
					</a>
				</s.Div_Description>
			</div>
		</s.Main>
	);
}

export default Food;

/* IMAGE CONTAINER for < 1024px */

const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface ImageContainerable {
	imageURLs: string[];
}

function ImageContainer({ imageURLs }: ImageContainerable) {
	const dragRef = useRef<number>(0);
	const containerRef = useRef<HTMLDivElement>();

	function handleMouseMove(event: React.DragEvent<HTMLDivElement>) {
		const { clientX, type } = event;
		const emptyImage = new Image(0, 0);
		emptyImage.src = EMPTY_IMAGE;

		event.dataTransfer.setDragImage(emptyImage, 0, 0);

		if (type === "dragstart") {
			dragRef.current = clientX;
		} else {
			const move = clientX - dragRef.current;
			containerRef.current.scrollBy({ left: move * -1 });
			dragRef.current = clientX;
		}
	}

	const imageMap = imageURLs.map((url) => (
		<NextImage src={url} alt="TODO" width={480} height={640} />
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
