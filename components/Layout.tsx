import Nav from "@/components/Nav/Nav";

interface Layoutable {
	children: JSX.Element;
}

function Layout({ children }: Layoutable) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<footer></footer>
		</>
	);
}

export default Layout;
