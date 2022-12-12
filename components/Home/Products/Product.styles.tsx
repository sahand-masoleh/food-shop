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
		grid-template-columns: repeat(2, 1fr);
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

	& > a {
		height: 100%;
		min-height: 0;
		flex-grow: 1;
		position: relative;
	}

	& img {
		height: 100%;
		border-radius: 2rem;
		object-fit: cover;
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
	inset: 0;

	& > img {
		outline: 2px solid var(--black);
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
