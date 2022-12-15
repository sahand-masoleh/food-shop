import Product, { Productable } from "./Product";
import * as s from "./Product.styles";

export interface ProductContainerable {
	products: (Productable & { id: number })[];
}

function ProductContainer({ products }: ProductContainerable) {
	const productMap = products.map((product) => (
		<Product
			key={product.id}
			name={product.name}
			cover={product.cover}
			slices={product.slices}
			price={product.price}
		/>
	));

	return (
		<s.M_Section_ProductContainer>{productMap}</s.M_Section_ProductContainer>
	);
}

export default ProductContainer;
