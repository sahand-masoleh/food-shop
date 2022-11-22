import styled from "styled-components";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { maxWidth } from "@/styles/globals";

/* container */
export const DIV_ProductContainer = styled.div`
	${maxWidth()}
	margin: 0 auto 10rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 26rem;
`;

export const DIV_Product = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	height: 26rem;

	& > a {
		min-height: 0;
		flex-grow: 1;
		position: relative;
	}

	& img {
		height: 100%;
		border-radius: 2rem;
		object-fit: cover;
	}

	& > span {
		text-transform: capitalize;
		font-size: 1.4rem;
		font-weight: 600;
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
