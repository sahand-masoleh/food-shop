import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { maxWidth, vars } from "@/styles/globals";
import React from "react";

/* container */

const Section_ProductContainer = styled(motion.section)`
	${maxWidth()}
	margin: 0 auto;
	width: 100%;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	justify-content: center;
	@media screen and (max-width: ${vars.bpTablet}) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

const container: Variants = {
	show: { transition: { staggerChildren: 0.2 } },
};

export const M_Section_ProductContainer = ({
	children,
}: {
	children: JSX.Element[];
}) => {
	return (
		<Section_ProductContainer
			as={motion.section}
			initial="hide"
			animate="show"
			exit="hide"
			variants={container}
		>
			{children}
		</Section_ProductContainer>
	);
};

/* each item */

export const Article_Product = styled(motion.article)`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	aspect-ratio: 7/10;
	max-height: 100%;
	cursor: pointer;

	& > a {
		height: 100%;
		min-height: 0;
		flex-grow: 1;
		position: relative;
	}

	/* name and price */
	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		column-gap: 1ch;

		& > span.name {
			font-size: 1.4rem;
			font-weight: 600;
			text-transform: capitalize;
		}
	}
`;

const item: Variants = {
	hide: { opacity: 0, scale: 0.95, transformOrigin: "bottom" },
	show: { opacity: 1, scale: 1, transition: { ease: "linear" } },
};

declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
	? Props extends object
		? Props
		: never
	: never;

type M_Article_Productable = {
	children: React.ReactNode;
} & $ElementProps<typeof Article_Product>;

export const M_Article_Product = ({
	children,
	...props
}: M_Article_Productable) => {
	return (
		<Article_Product as={motion.article} variants={item} {...props}>
			{children}
		</Article_Product>
	);
};

/* wrapper for the image */

export const M_ImageWrapper = styled(motion.div)`
	position: absolute;
	border-radius: 2rem;
	overflow: hidden;
	inset: 0;
	outline: 2px solid transparent;
	transition: outline-color 0.2s linear;

	& > img {
		height: 100%;
		min-width: 100%;
		object-fit: cover;
	}

	&:hover {
		outline-color: var(--black);
	}
`;

export const M_Image = (props: ImageProps) => {
	return (
		<M_ImageWrapper
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, ease: "linear" }}
		>
			<Image {...props} />
		</M_ImageWrapper>
	);
};
