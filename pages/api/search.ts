import type { NextApiRequest, NextApiResponse } from "next";
import type { QueryResult } from "pg";
import { query } from "@/db/db";
import { DBProductable } from "@/types/Product";

type SearchResult = Pick<DBProductable, "id" | "name" | "price" | "cover">;

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<SearchResult[]>
) {
	let keyword = req.query.keyword as string;

	try {
		// TODO: implement fuzzy search
		const response: QueryResult<SearchResult> = await query(
			`
			SELECT id, name, price, cover
			FROM products
			WHERE name LIKE $1
			`,
			[keyword]
		);
		res.json(response.rows);
	} catch (error) {
		// TODO: error codes
		console.log(error);
	}
}

export default handler;
