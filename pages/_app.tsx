import "@/styles/globals.css";
import "@/styles/reset.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CartContextProvider } from "@/contexts/CartContext";
import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>The Food Shop</title>
				<meta
					name="description"
					content="A fuits and vegetables shop built using Next.js"
				/>
				<meta name="author" content="Sahand Masoleh" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<CartContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartContextProvider>
		</>
	);
}
