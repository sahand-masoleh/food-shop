function SVGDefs() {
	return (
		<svg width="0" height="0">
			<defs>
				<polygon
					id="zigzag"
					transform="scale(0.0099) translate(0.5, 0.5)"
					points="0 0, 30 20, 50 0, 70 20, 100 0, 100 100, 70 80, 50 100, 30 80, 0 100"
				/>
				<clipPath id="zigzag-clip" clipPathUnits="objectBoundingBox">
					<use href="#zigzag" />
				</clipPath>

				<rect
					id="rectangle"
					transform="scale(0.0099) translate(0.5, 0.5)"
					x="1"
					y="1"
					width="98"
					height="98"
					rx="15"
				/>
				<clipPath id="rectangle-clip" clipPathUnits="objectBoundingBox">
					<use href="#rectangle" />
				</clipPath>

				<polygon
					id="octagon"
					transform="scale(0.0099) translate(0.5, 0.5)"
					points="50 0, 85.355 14.645, 100 50, 85.355 85.355, 50 100, 14.645 85.355, 0 50, 14.645 14.645"
				/>
				<clipPath id="octagon-clip" clipPathUnits="objectBoundingBox">
					<use href="#octagon" />
				</clipPath>

				<path
					id="hourglass"
					transform="scale(0.0099) translate(0.5, 0.5)"
					d="M -5.0499983e-5,-4.855e-5 V 27.298544 C -5.0499983e-5,36.785173 8.7756895,45.110957 22.15364,50.000001 8.7756995,54.88907 -7.0499983e-5,63.214829 -5.0499983e-5,72.701458 V 100.00005 H 50 l 50.00005,-5.11e-4 V 72.700941 c -2e-5,-9.486483 -8.775564,-17.81189 -22.153171,-22.70094 C 91.22457,45.110934 100.00005,36.785065 100.00005,27.298544 V -4.855e-5 H 50 Z"
				/>
				<clipPath id="hourglass-clip" clipPathUnits="objectBoundingBox">
					<use href="#hourglass" fill="black" />
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
			</defs>
		</svg>
	);
}

export default SVGDefs;
