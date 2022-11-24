import Component, { Homeable } from "@/components/Home/Home";
import React from "react";

function Index(props: Homeable) {
	return <Component {...props} />;
}

export default Index;

export async function getStaticProps() {
	const backendURL = process.env.BACKEND_URL;
	const url = new URL("/api/products/list-all", backendURL);
	const productsResponse = await fetch(url);
	const products: Homeable["products"] = await productsResponse.json();
	return { props: { products, backendURL } };
}
