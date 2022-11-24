import { DBProductable } from "@/types/Product";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type CartItem = Pick<DBProductable, "id" | "name" | "price" | "cover">;

export function key(cartIds: number[]) {
	if (cartIds.length < 1) return null;
	const key = cartIds.sort();
	return key.toString();
}

export async function fetcher(cartIds: number[]) {
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
