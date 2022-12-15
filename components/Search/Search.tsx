import useSWR, { useSWRConfig } from "swr";
import { fetcher, key } from "./swrFunctions";
import ProductContainer from "@/components/common/Product/ProductContainer";
import { useRouter } from "next/router";
import * as s from "./Search.styles";
import { useEffect } from "react";

const CDN = process.env.NEXT_PUBLIC_CDN;

/* PAGE */
// shows results of searching a keyword
// types are defined in swrFunctions

function Search() {
	/* access search params */
	const router = useRouter();
	const keywords = router.query.keyword;
	const keyword = Array.isArray(keywords) ? keywords[0] : keywords;

	/* SWR, functions are defined below */
	const { data, error, mutate } = useSWR(
		() => key(keyword),
		() => fetcher(keyword)
	);

	/* force the page to update if search is done from search page */
	useEffect(() => {
		mutate();
	}, [router]);

	const productsWithURL = data?.map((product) => {
		return {
			...product,
			cover: new URL(product.cover, CDN).toString(),
			slices: "",
		};
	});

	function title() {
		if (error) {
			return "something went wrong :(";
		} else if (data) {
			return `“${keyword}”`;
		} else if (!keyword) {
			return "“”";
		} else {
			return "loading...";
		}
	}

	return (
		<s.Main>
			<div className="title">
				<h1>{title()}</h1>
			</div>
			{data && <ProductContainer products={productsWithURL} />}
		</s.Main>
	);
}

export default Search;
