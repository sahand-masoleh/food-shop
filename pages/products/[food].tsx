import Component, { Foodable } from "@/components/Food/Food";
import { DBProductable } from "@/types/Product";
import { QueryResult } from "pg";
import { query } from "@/db/db";

function Food(props: Foodable) {
	return <Component {...props} />;
}

export default Food;

type Path = Pick<DBProductable, "name">;

export async function getStaticPaths() {
	const response: QueryResult<Path> = await query(
		"SELECT id, name FROM products"
	);
	const paths = response.rows.map((path) => ({
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
	const response: QueryResult<Foodable["product"]> = await query(
		`
		SELECT id, type, price, description, source, noface, images
		FROM products
		WHERE name = $1
		`,
		[food]
	);
	const details = response.rows[0];
	return { props: { product: { name: food, ...details }, backendURL } };
}
