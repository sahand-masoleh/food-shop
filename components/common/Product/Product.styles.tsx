import styled from "styled-components";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { maxWidth, vars } from "@/styles/globals";

/* container */
export const SECTION_ProductContainer = styled.section`
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

/* wrapper for each item */
export const ARTICLE_Product = styled.article`
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
			transition={{ bounce: false, duration: 0.2 }}
		>
			<Image {...props} />
		</M_ImageWrapper>
	);
};
