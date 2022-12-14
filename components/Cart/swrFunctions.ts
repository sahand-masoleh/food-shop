import { DBProductable } from "@/types/Product";

type CartItem = Pick<DBProductable, "id" | "name" | "price" | "cover">;

export function key(cartIds: number[]) {
	if (cartIds.length < 1) return null;
	const key = cartIds.sort();
	return key.toString();
}

export async function fetcher(cartIds: number[]) {
	let url = "api/cart";
	const searchParams = new URLSearchParams();
	for (let id of cartIds) {
		searchParams.append("id", id.toString());
	}
	const searchParamsString = searchParams.toString();
	if (searchParamsString) {
		url += `?${searchParamsString}`;
	}
	const response = await fetch(url);
	const json: CartItem[] = await response.json();
	return json;
}
