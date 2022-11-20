export type Color = "green" | "blue" | "red" | "yellow";
const colors: Color[] = ["green", "blue", "red", "yellow"];

function randomElem<T>(array: T[]) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

function randomColors(num: number) {
	let chosen: Color[] = [];

	for (let i = 0; i < num; i++) {
		const filteredColors = colors.filter((e) => !chosen.includes(e));
		chosen.push(randomElem(filteredColors));
	}

	return chosen;
}

export default randomColors;
