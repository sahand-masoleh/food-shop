import styled from "styled-components";

export const Div_Hero = styled.div`
	background-color: var(--yellow);
	display: flex;
	gap: 1rem;
	overflow-x: scroll;
	padding-bottom: 1.5rem;
	padding-top: 5rem;
`;

export const Div_ClippedImage = styled.div`
	height: 38rem;
	width: 38rem;
	flex-shrink: 0;
	position: relative;
	overflow: hidden;
	mask-image: var(--mask-image);
	mask-origin: padding-box;
	mask-size: contain;
	mask-repeat: no-repeat;

	& > img {
		object-fit: cover;
	}
`;
