import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import ProductContainer from "./Produts/ProductContainer";

type Product = {
	id: number;
	name: string;
	cover: string;
	slices: string;
	images: string[];
	is_hero: boolean;
};

interface Homeable {
	products: Product[];
	backendURL: string;
}

function Home({ products, backendURL }: Homeable) {
	const productsWithURL = products.map((product) => {
		return {
			...product,
			cover: backendURL + product.cover,
			slices: backendURL + product.slices,
			hero: backendURL + product.images[0],
			images: undefined,
		};
	});
	return (
		<main>
			<Carousel heroes={productsWithURL.filter((e) => e.is_hero)} />
			<Intro />
			<ProductContainer products={productsWithURL} />
		</main>
	);
}

export default Home;
