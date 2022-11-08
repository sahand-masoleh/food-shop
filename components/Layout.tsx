import Nav from "@/components/common/Nav/Nav";

interface Layoutable {
	children: JSX.Element;
}

function Layout({ children }: Layoutable) {
	return (
		<>
			<Nav />
			{children}
			<footer></footer>
		</>
	);
}

export default Layout;
