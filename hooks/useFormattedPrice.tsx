import { useState, useEffect } from "react";
import formatter from "@/utils/formatter";

function useFormattedPrice(price: number) {
	const [formattedPrice, setFormattedPrice] = useState("");

	useEffect(() => {
		setFormattedPrice(formatter.format(price));
	}, [price]);

	return formattedPrice;
}

export default useFormattedPrice;
