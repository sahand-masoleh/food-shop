import Product, { Productable } from "./Product";
import * as s from "./Producs.styles";

interface ProductContainerable {
	products: (Productable & { id: number })[];
}

function ProductContainer({ products }: ProductContainerable) {
	const productMap = products.map((product) => (
		<Product
			key={product.id}
			name={product.name}
			cover={product.cover}
			slices={product.slices}
		/>
	));

	return <s.DIV_ProductContainer>{productMap}</s.DIV_ProductContainer>;
}

export default ProductContainer;
