import { ReactNode } from "react";

export enum TextElement {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    P = "p",
    SPAN = "span",
}


export interface TypographyProps {
    children: ReactNode;
    as?: TextElement,
    className?: string;
}