import { css } from "styled-components";

export const maxWidth = (width?: string) => css`
	max-width: ${width || "var(--max-width)"};
`;
