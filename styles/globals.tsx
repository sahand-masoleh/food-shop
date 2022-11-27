import { css } from "styled-components";

export const maxWidth = (width?: string) => css`
	max-width: ${width || "var(--max-width)"};
`;

export const vars = {
	bpCRT: "1024px",
	bpTablet: "768px",
	bpMobile: "480px",
};
