import { motion, Variants, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Nav from "@/components/common/Nav/Nav";
import Footer from "@/components/common/Footer/Footer";

interface Layoutable {
	children: JSX.Element;
}

const variants: Variants = {
	hide: { opacity: 0 },
	show: { opacity: 1 },
};

function Layout({ children }: Layoutable) {
	const router = useRouter();

	return (
		<>
			<Nav />
			<AnimatePresence mode="wait">
				<motion.div
					key={router.pathname}
					variants={variants}
					initial="hide"
					animate="show"
					exit="hide"
					transition={{ duration: 0.2 }}
				>
					{children}
					<Footer />
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default Layout;
