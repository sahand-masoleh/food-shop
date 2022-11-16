import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import ProductContainer, {
	ProductContainerable,
} from "./Produts/ProductContainer";

function Home(props: ProductContainerable) {
	return (
		<main>
			<Carousel />
			<Intro />
			<ProductContainer {...props} />
		</main>
	);
}

export default Home;
