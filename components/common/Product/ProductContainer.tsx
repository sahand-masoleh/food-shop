import Product, { Productable } from "./Product";
import * as s from "./Product.styles";

export interface ProductContainerable {
	products: (Productable & { id: number })[];
	orchestrate?: boolean;
	grow?: boolean;
}

function ProductContainer({
	products,
	orchestrate = false,
	grow = false,
}: ProductContainerable) {
	const productMap = products.map((product) => (
		<Product
			key={product.id}
			name={product.name}
			cover={product.cover}
			slices={product.slices}
			price={product.price}
			grow={grow}
		/>
	));

	return (
		<s.M_Section_ProductContainer orchestrate={orchestrate}>
			{productMap}
		</s.M_Section_ProductContainer>
	);
}

export default ProductContainer;
