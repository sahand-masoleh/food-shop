import "@/styles/globals.css";
import "@/styles/reset.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>The Figma Store</title>
				<meta
					name="description"
					content="A Clone of Figma Store build using Next.js"
				/>
				<meta name="author" content="Sahand Masoleh" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
