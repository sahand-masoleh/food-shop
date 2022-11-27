import * as s from "@/styles/common.styles";

function Disclaimer() {
	return (
		<s.Main>
			<div>
				<h1>Disclaimer</h1>
				<p>
					This website is a liberal copy of{" "}
					<a href="https://store.figma.com">The Figma Store</a>, however not a
					single line of code, nor any of the assets, including images, shapes,
					and text has been copied over or recreated 1:1.
				</p>
				<p>
					This website or its creator are not affiliated with{" "}
					<span className="em">Figma</span> in any shape or form, and the sole
					purpose of its creation is practicing web technologies with zero
					commercial aspect.
				</p>
				<p>
					None of the contents regarding food or else are to be taken seriously
					or as professional advice.
				</p>
			</div>
		</s.Main>
	);
}

export default Disclaimer;
