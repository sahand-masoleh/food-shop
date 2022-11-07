import { css } from "styled-components";

export const maxWidth = (width?: number) => css`
	max-width: ${width || "var(--max-width)"};
	margin: 0 auto;
`;
