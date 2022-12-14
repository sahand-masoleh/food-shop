import type { NextApiRequest, NextApiResponse } from "next";
import type { QueryResult } from "pg";
import { query } from "@/db/db";
import { DBProductable } from "@/types/Product";

type CartItem = Pick<DBProductable, "id" | "name" | "price" | "cover">;

async function handler(req: NextApiRequest, res: NextApiResponse<CartItem[]>) {
	let ids = req.query.id as string | string[];

	/* make sure ids is always an array as single params are not put in arrays by default */
	if (!Array.isArray(ids)) {
		ids = [ids];
	}

	try {
		const response: QueryResult<CartItem> = await query(
			`
			SELECT id, name, price, cover
			FROM products
			WHERE id = ANY($1)
			`,
			[ids]
		);
		res.json(response.rows);
	} catch (error) {
		// TODO: error codes
		console.log(error);
	}
}

export default handler;
