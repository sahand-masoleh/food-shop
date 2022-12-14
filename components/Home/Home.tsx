import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import ProductContainer from "@/components/common/Product/ProductContainer";
import { DBProductable } from "@/types/Product";
import * as s from "./Home.styles";

const CDN = process.env.NEXT_PUBLIC_CDN;

export interface Homeable {
	products: (Pick<
		DBProductable,
		"id" | "name" | "cover" | "slices" | "price"
	> & {
		hero: string | null;
	})[];
}

function Home({ products }: Homeable) {
	const productsWithURL = products.map((product) => {
		return {
			...product,
			cover: new URL(product.cover, CDN).toString(),
			slices: new URL(product.slices, CDN).toString(),
			hero: product.hero && new URL(product.hero, CDN).toString(),
		};
	});
	return (
		<s.Main>
			<Carousel
				heroes={productsWithURL
					.filter((e) => !!e.hero)
					.map((e) => ({ id: e.id, name: e.name, hero: e.hero }))}
			/>
			<Intro />
			<ProductContainer products={productsWithURL} />
		</s.Main>
	);
}

export default Home;
