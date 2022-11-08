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

	& > img {
		z-index: 10;
		mask: inherit;
		object-fit: cover;
		object-position: center;
		clip-path: var(--clip);
	}

	& > svg {
		position: absolute;
		stroke: black;
		stroke-width: 1px;
	}
`;
