import Home from "@/components/Home/Home";
import React from "react";

function Index(props: any) {
	return <Home {...props} />;
}

export default Index;

export async function getStaticProps() {
	const backendURL = process.env.BACKEND_URL;
	const url = new URL("/api/products/", backendURL);
	const productsResponse = await fetch(url);
	const products = await productsResponse.json();
	return { props: { products, backendURL } };
}
