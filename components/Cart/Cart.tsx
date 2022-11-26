import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, key } from "./swrFunctions";
import { CartContext } from "@/contexts/CartContext";
import Row from "./Row";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import * as s from "./Cart.styles";

/* PAGE */
// the page consists of one component
// a table with each item as a row
// types are defined in swrFunctions

function Cart() {
	/* cart context */
	const { cart, addItem, deleteItem } = useContext(CartContext);
	/* extract IDs for SWR */
	const cartIds = cart.map((e) => e.id);
	/* SWR, functions are defined below */
	// TODO: handle errors
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
					addOne={() => addItem(id, quantity + 1)}
					removeOne={() => addItem(id, quantity - 1)}
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
