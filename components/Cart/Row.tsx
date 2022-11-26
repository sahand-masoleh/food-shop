import Image from "next/image";
import * as s from "./Cart.styles";
import { MAX_QTY } from "@/contexts/CartContext";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import Delete from "@/assets/icons/delete.svg";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/* EACH ITEM AS A ROW */

interface Rowable {
	name: string;
	cover: string;
	price: number;
	quantity: number;
	addOne: () => void;
	removeOne: () => void;
	deleteItem: () => void;
}

function Row({
	name,
	cover,
	price,
	quantity,
	addOne,
	removeOne,
	deleteItem,
}: Rowable) {
	const formattedPrice = useFormattedPrice(price);
	const formattedSubTotal = useFormattedPrice(price * quantity);

	return (
		<div className="row">
			<div className="item">
				<s.Button onClick={deleteItem}>
					<Delete />
				</s.Button>
				<Image
					src={new URL(cover, BACKEND_URL).toString()}
					alt={name}
					width={100}
					height={100}
				/>
				<span>{name}</span>
			</div>
			<div className="price">{formattedPrice}</div>
			<div className="qty">
				<div>
					<s.Button onClick={addOne} disabled={quantity >= MAX_QTY}>
						<Plus />
					</s.Button>
					<span>{quantity} kg</span>
					<s.Button onClick={removeOne} disabled={quantity <= 1}>
						<Minus />
					</s.Button>
				</div>
			</div>
			<div className="price subtotal">{formattedSubTotal}</div>
		</div>
	);
}

export default Row;
