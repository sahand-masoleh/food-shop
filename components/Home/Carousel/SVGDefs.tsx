function SVGDefs() {
	return (
		<svg width="0" height="0">
			<defs>
				<path
					id="kiwi"
					transform="scale(0.0099) translate(0.5, 0.5)"
					d="M 54.768148,10.979439 64.354932,1.9252456 C 69.035164,-2.4948956 76.593172,1.224759 76.129604,7.7202934 L 75.180196,21.025402 C 74.913796,24.761192 77.502499,28.079092 81.126034,28.644694 L 94.029872,30.659265 C 100.32915,31.64276 102.19598,40.001019 96.938013,43.680125 L 86.167405,51.21708 C 83.143069,53.333436 82.219168,57.470568 84.045511,60.718128 L 90.549657,72.284639 C 93.725009,77.93115 88.494567,84.633562 82.401357,82.726566 L 69.919793,78.819894 C 66.414882,77.723031 62.673935,79.564239 61.328165,83.048469 L 56.534572,95.45697 C 54.194454,101.51434 45.805666,101.51434 43.465548,95.45697 L 38.671955,83.048469 C 37.326185,79.564239 33.584833,77.723031 30.080327,78.819894 L 17.598763,82.726566 C 11.505554,84.633562 6.2751098,77.93115 9.4504618,72.284639 L 15.954609,60.718128 C 17.780952,57.470154 16.857051,53.333436 13.832715,51.21708 L 3.0621064,43.680125 C -2.1958675,40.000605 -0.32944264,31.64276 5.9702473,30.659265 L 18.874086,28.644694 C 22.497621,28.079092 25.086324,24.761192 24.819519,21.025402 L 23.870111,7.7202934 C 23.406543,1.2251727 30.964551,-2.4944818 35.644783,1.9252456 L 45.231567,10.979439 C 47.923916,13.521961 52.076204,13.521961 54.768148,10.979439 Z"
				/>
				<clipPath id="kiwi-clip" clipPathUnits="objectBoundingBox">
					<use href="#kiwi" fill="black" />
				</clipPath>

				<circle
					id="circle"
					transform="scale(0.0099) translate(0.5, 0.5)"
					cx="50"
					cy="50"
					r="49.5"
				/>
				<clipPath id="circle-clip" clipPathUnits="objectBoundingBox">
					<use href="#circle" fill="black" />
				</clipPath>

				<rect
					id="rect"
					transform="scale(0.0099) translate(0.5, 0.5)"
					x="0"
					y="0"
					width="100"
					height="100"
					rx="10"
				/>
				<clipPath id="rect-clip" clipPathUnits="objectBoundingBox">
					<use href="#rect" fill="black" />
				</clipPath>

				<rect
					id="diamond"
					transform="scale(0.0099) translate(50.5, -3.6) rotate(45)"
					x="0"
					y="0"
					width="76.555382"
					height="76.555389"
					rx="10"
				/>
				<clipPath id="diamond-clip" clipPathUnits="objectBoundingBox">
					<use href="#diamond" fill="black" />
				</clipPath>

				<path
					id="flower"
					transform="scale(0.0099) translate(0.5, 0.5)"
					d="M 25.000024 0 A 25 25 0 0 0 0 25.000024 A 25 25 0 0 0 25.000024 50.000049 A 25 25 0 0 0 0 75.000073 A 25 25 0 0 0 25.000024 100.0001 A 25 25 0 0 0 50.000049 75.000073 A 25 25 0 0 0 75.000073 100.0001 A 25 25 0 0 0 100.0001 75.000073 A 25 25 0 0 0 75.000073 50.000049 A 25 25 0 0 0 100.0001 25.000024 A 25 25 0 0 0 75.000073 0 A 25 25 0 0 0 50.000049 25.000024 A 25 25 0 0 0 25.000024 0 z "
				/>
				<clipPath id="flower-clip" clipPathUnits="objectBoundingBox">
					<use href="#flower" fill="black" />
				</clipPath>
			</defs>
		</svg>
	);
}

export default SVGDefs;

export function clipIterator() {
	const clips = ["kiwi", "circle", "rect", "diamond", "flower"];
	let pointer = 0;
	return {
		next() {
			return { value: clips[pointer++ % clips.length] };
		},
	};
}
