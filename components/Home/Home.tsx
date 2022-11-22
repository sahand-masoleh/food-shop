import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import ProductContainer from "./Produts/ProductContainer";
import { DBProductable } from "@/types/Product";

export interface Homeable {
	products: (Pick<
		DBProductable,
		"id" | "name" | "cover" | "slices" | "price"
	> & {
		hero: string | null;
	})[];
	backendURL: string;
}

function Home({ products, backendURL }: Homeable) {
	const productsWithURL = products.map((product) => {
		return {
			...product,
			cover: new URL(product.cover, backendURL).toString(),
			slices: new URL(product.slices, backendURL).toString(),
			hero: product.hero && new URL(product.hero, backendURL).toString(),
		};
	});
	return (
		<main>
			<Carousel
				heroes={productsWithURL
					.filter((e) => !!e.hero)
					.map((e) => ({ id: e.id, name: e.name, hero: e.hero }))}
			/>
			<Intro />
			<ProductContainer products={productsWithURL} />
		</main>
	);
}

export default Home;
