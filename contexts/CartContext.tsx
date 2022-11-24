import { createContext, useEffect, useRef, useState } from "react";
export const MAX_QTY = 99;

type CartContextItem = {
	id: number;
	quantity: number;
};

/* THE LOGIC */
/* written seperately so its return type can be used in creating the context*/

function useValue() {
	const [cart, setCart] = useState<CartContextItem[]>([]);
	const firstRender = useRef(false);
	useEffect(() => {
		if (firstRender.current === false) {
			const prevCart = window.localStorage.getItem("cart");
			/* TODO: validate prevCart */
			if (prevCart) {
				try {
					const parsedCart = JSON.parse(prevCart);
					setCart(parsedCart);
				} catch {}
			}
			firstRender.current = true;
		}
	}, []);
	useEffect(() => {
		if (firstRender.current === true) {
			window.localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart]);

	function addItem(id: number, quantity: number) {
		setCart((prevCart) => {
			const index = prevCart.findIndex((e) => e.id === id);
			if (index > -1) {
				/* do not go below 0 */
				if (quantity < 0) return prevCart;
				/* do not go over max */

				const neuCart = [...prevCart];
				if (quantity > MAX_QTY) {
					neuCart[index].quantity = MAX_QTY;
				} else {
					neuCart[index].quantity = quantity;
				}
				return neuCart;
			} else {
				return [...prevCart, { id, quantity }];
			}
		});
	}

	function deleteItem(id: number) {
		setCart((prevCart) => {
			const index = prevCart.findIndex((e) => e.id === id);
			const neuCart = [...prevCart];
			neuCart.splice(index, 1);
			// window.localStorage.setItem("cart", JSON.stringify(neuCart));
			return neuCart;
		});
	}

	return { cart, addItem, deleteItem };
}

/* THE CONTEXT */

export const CartContext = createContext({} as ReturnType<typeof useValue>);

export function CartContextProvider({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return (
		<CartContext.Provider value={useValue()}>{children}</CartContext.Provider>
	);
}
