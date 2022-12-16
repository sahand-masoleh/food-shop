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

// motion variants for the container
// if the the orchestrate attribute is true, children will fade in one by one
const container: Variants = {
	show: (orchestrate: boolean) => ({
		transition: {
			staggerChildren: orchestrate ? 0.3 : 0,
		},
	}),
};

interface M_Section_ProductContainerable {
	children: React.ReactNode;
	orchestrate: boolean;
}

export const M_Section_ProductContainer = ({
	children,
	orchestrate,
}: M_Section_ProductContainerable) => {
	return (
		<Section_ProductContainer
			as={motion.section}
			initial="hide"
			animate="show"
			exit="hide"
			variants={container}
			custom={orchestrate}
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

// motion variatns for the child
// same name as the variants for the container to enable orchestration
const item: Variants = {
	hide: (grow: boolean) => ({
		opacity: 0,
		scale: grow ? 0.95 : 1,
		transformOrigin: "bottom",
	}),
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3, ease: "linear" },
	},
};

// since animations are injected using a wrapper around a styled 'article' element
// we need to infer the prop types to be able to pass them down
declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
	? Props extends object
		? Props
		: never
	: never;

type M_Article_Productable = {
	children: React.ReactNode;
	grow: boolean;
} & $ElementProps<typeof Article_Product>;

export const M_Article_Product = ({
	children,
	grow,
	...props
}: M_Article_Productable) => {
	return (
		<Article_Product
			as={motion.article}
			variants={item}
			custom={grow}
			{...props}
		>
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
			transition={{ duration: 0.3, ease: "linear" }}
		>
			<Image {...props} />
		</M_ImageWrapper>
	);
};
