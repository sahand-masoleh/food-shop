import Component, { Foodable } from "@/components/Food/Food";
import { DBProductable } from "@/types/Product";

function Food(props: Foodable) {
	return <Component {...props} />;
}

export default Food;

type Path = Pick<DBProductable, "name">;

export async function getStaticPaths() {
	const backendURL = process.env.BACKEND_URL;
	const url = new URL("/api/products/paths", backendURL);
	const response = await fetch(url);
	const json: Path[] = await response.json();
	const paths = json.map((path) => ({
		params: { food: path.name },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({
	params,
}: {
	params: { food: string };
}): Promise<{ props: Foodable }> {
	const { food } = params;
	const backendURL = process.env.BACKEND_URL;
	const url = new URL(`/api/products/${food}`, backendURL);
	const response = await fetch(url);
	const json: Omit<Foodable["product"], "name"> = await response.json();
	return { props: { product: { name: food, ...json }, backendURL } };
}
