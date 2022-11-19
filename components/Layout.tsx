import Nav from "@/components/common/Nav/Nav";
import Footer from "@/components/common/Footer/Footer";

interface Layoutable {
	children: JSX.Element;
}

function Layout({ children }: Layoutable) {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
