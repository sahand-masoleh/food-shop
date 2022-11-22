export interface DBProductable {
	id: number;
	name: string;
	type: "fruit" | "vegatable";
	price: number;
	description: string;
	source: string;
	cover: string;
	slices: string;
	noface: string;
	images: string[];
	inventory: number;
	is_hero: boolean;
}
