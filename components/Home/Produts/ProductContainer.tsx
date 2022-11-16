import Product, { Productable } from "./Product";
import * as s from "./Producs.styles";

export interface ProductContainerable {
	products: Productable[];
	backendURL: string;
}

function ProductContainer({ products, backendURL }: ProductContainerable) {
	const productMap = products.map((product) => (
		<Product
			key={product.id}
			name={product.name}
			cover={backendURL + product.cover}
			slices={backendURL + product.slices}
		/>
	));

	return <s.DIV_ProductContainer>{productMap}</s.DIV_ProductContainer>;
}

export default ProductContainer;
