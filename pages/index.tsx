import Component, { Homeable } from "@/components/Home/Home";
import React from "react";
import { QueryResult } from "pg";
import { query } from "@/db/db";

function Index(props: Homeable) {
	return <Component {...props} />;
}

export default Index;

export async function getStaticProps() {
	try {
		const productsResponse: QueryResult<Homeable["products"]> = await query(
			`
			SELECT id, name, cover, slices, price,
				CASE
					WHEN is_hero = TRUE THEN images[1]
					ELSE NULL
				END as hero
			FROM products
			`
		);
		const products = productsResponse.rows;
		return { props: { products } };
	} catch (error) {
		console.log(error);
	}
}
