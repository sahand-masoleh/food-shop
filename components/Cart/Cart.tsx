import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { CartContext, MAX_QTY } from "@/contexts/CartContext";
import { DBProductable } from "@/types/Product";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import Delete from "@/assets/icons/delete.svg";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import * as s from "./Cart.styles";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/* SWR functions */

function key(cartIds: number[]) {
	if (cartIds.length < 1) return null;
	const key = cartIds.sort();
	return key.toString();
}

async function fetcher(cartIds: number[]) {
	const url = new URL("api/products/list-cart", BACKEND_URL);
	const searchParams = new URLSearchParams();
	for (let id of cartIds) {
		searchParams.append("id", id.toString());
	}
	url.search = searchParams.toString();
	const response = await fetch(url);
	const json: CartItem[] = await response.json();
	return json;
}

/* PAGE */
// the page consists of one component
// a table with each item as a row

type CartItem = Pick<DBProductable, "id" | "name" | "price" | "cover">;

function Cart() {
	/* cart context */
	const { cart, addItem, deleteItem } = useContext(CartContext);
	/* extract IDs for SWR */
	const cartIds = cart.map((e) => e.id);
	/* SWR, functions are defined below */
	const { data, error } = useSWR(
		() => key(cartIds),
		() => fetcher(cartIds)
	);
	/* calculating the total */
	const [total, setTotal] = useState(0);
	useEffect(() => {
		data &&
			setTotal(
				cart.reduce((a, b) => {
					const price = data.find((e) => e.id === b.id).price;
					return a + price * b.quantity;
				}, 0)
			);
	}, [cart, data]);
	const formattedTotal = useFormattedPrice(total);

	/* each item in the table */
	const rowMap =
		data &&
		cart.map((item) => {
			const { id, cover, name, price } = data.find((e) => e.id === item.id);
			const { quantity } = item;

			return (
				<Row
					key={id}
					name={name}
					cover={cover}
					price={price}
					quantity={quantity}
					// TODO: needs a pure function because of the double render
					// find a better implementation
					addOne={() => addItem(id, cart.find((e) => e.id === id).quantity + 1)}
					removeOne={() =>
						addItem(id, cart.find((e) => e.id === id).quantity - 1)
					}
					deleteItem={() => deleteItem(id)}
				/>
			);
		});

	return (
		<s.Main>
			<h3>
				{cart.length} {cart.length === 1 ? "item" : "items"} in cart
			</h3>
			<s.Table>
				<thead>
					<tr>
						<th scope="column">item</th>
						<th scope="column">price</th>
						<th scope="column">qty</th>
						<th scope="column">subtotal</th>
					</tr>
				</thead>
				<tbody>{rowMap}</tbody>
			</s.Table>
			<div>
				<span>total: </span>
				<span>{formattedTotal}</span>
			</div>
		</s.Main>
	);
}

export default Cart;

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
		<tr>
			<td className="item">
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
			</td>
			<td className="price">{formattedPrice}</td>
			<td className="qty">
				<div>
					<s.Button onClick={addOne} disabled={quantity >= MAX_QTY}>
						<Plus />
					</s.Button>
					<span>{quantity} kg</span>
					<s.Button onClick={removeOne} disabled={quantity <= 1}>
						<Minus />
					</s.Button>
				</div>
			</td>
			<td className="price">{formattedSubTotal}</td>
		</tr>
	);
}
