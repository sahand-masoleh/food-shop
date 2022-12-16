export type Color = "transparent" | "green" | "purple" | "red" | "yellow";
const colors: Color[] = ["green", "purple", "red", "yellow"];

function randomElem<T>(array: T[]) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

function randomColors(num: number) {
	let chosen: Color[] = [];

	for (let i = 0; i < num; i++) {
		const filteredColors = colors.filter((e) => !chosen.includes(e));
		if (filteredColors.length < 1) break;
		chosen.push(randomElem(filteredColors));
	}

	return chosen;
}

export default randomColors;
