import * as s from "@/styles/common.styles";

function About() {
	return (
		<s.Main>
			<div>
				<h1>Zdravo! Welcome to The Fruit Shop!</h1>
				<p>
					My name is Sahand and I am a web developer. I have created this
					website as a non-1:1 clone of{" "}
					<a href="https://store.figma.com" target="_blank" rel="noreferrer">
						Figma&apos;s merch store
					</a>{" "}
					to demonstrate my skills for any potential employer. This website is{" "}
					<span className="em">100% not real</span> and none of the products
					that you see here are actually purchasable.
				</p>
				<h2>Technology Stack</h2>
				<p>
					The frontend is built using <span className="em">NextJS</span> with{" "}
					<span className="em">Styled Components</span> and{" "}
					<span className="em">Framer Motion</span>. There is a small backend
					server for feeding data to Next&apos;ss static generation functions
					and delivering images, for which I used{" "}
					<span className="em">NodeJs</span> with{" "}
					<span className="em">ExpressJs</span> and{" "}
					<span className="em">PostgreSQL</span>. And of course,{" "}
					<span className="em">TypeScript</span> is used thoughout the app.
				</p>
				<p>
					All the code for both the frontend and the backend can be seen on the
					git repo linked in the footer.
				</p>
				<h2>Future Development</h2>
				<p>
					In addition to the general bug-huntung and quality-of-life
					improvements, I will work on adding more animations and mock products,
					and eventually creating a PWA out of the website.
				</p>
				<p>
					I hope it turned out well, you can check out my other projects on my
					portfolio website.
				</p>
				<p>Thank you for your time, and have a nice day!</p>
			</div>
		</s.Main>
	);
}

export default About;
