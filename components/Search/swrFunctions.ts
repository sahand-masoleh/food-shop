import { DBProductable } from "@/types/Product";

type SearchResult = Pick<DBProductable, "id" | "name" | "price" | "cover">;

export function key(keyword: string) {
	if (!keyword) return null;
	return key.toString();
}

export async function fetcher(keyword: string) {
	let url = "api/search";
	const searchParams = new URLSearchParams();
	searchParams.append("keyword", keyword);
	url += `?${searchParams}`;
	const response = await fetch(url);
	const json: SearchResult[] = await response.json();
	return json;
}
