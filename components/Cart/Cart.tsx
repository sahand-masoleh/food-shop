import { useContext, useEffect, useState } from "react";
import Link from "next/link";
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

	if (error) {
		return (
			<s.Main>
				<div>
					<p>Something went wrong :(</p>
				</div>
			</s.Main>
		);
	}

	if (!data) {
		return (
			<s.Main>
				<div>
					<p>Loading...</p>
				</div>
			</s.Main>
		);
	}

	return (
		<s.Main>
			<div>
				<h3>
					{cart.length} {cart.length === 1 ? "item" : "items"} in cart
				</h3>
				{cart.length > 0 ? (
					<>
						<s.Div_Table role="table">
							<div role="rowgroup">
								<div className="row header" role="row">
									<span className="item">item</span>
									<span className="price">price</span>
									<span className="qty">qty</span>
									<span className="subtotal">subtotal</span>
								</div>
							</div>
							<div className="row-group" role="rowgroup">
								{rowMap}
							</div>
						</s.Div_Table>
						<div className="total">
							<span>total: </span>
							<span data-testid="total">{formattedTotal}</span>
						</div>
					</>
				) : (
					<>
						<h1>Oh no! Cart is empty...</h1>
						<Link href="/#shop" passHref legacyBehavior>
							<s.A black>see all products</s.A>
						</Link>
					</>
				)}
			</div>
		</s.Main>
	);
}

export default Cart;
