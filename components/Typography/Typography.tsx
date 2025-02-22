import React from "react";
import { TextElement, TypographyProps } from "./Typography.types";
import classNames from "classnames";

export const Typography = ({
  as: Tag = TextElement.P,
  children,
  className,
}: TypographyProps) => {
  const typographyStyles: Record<TextElement, string> = {
    [TextElement.H1]: "text-4xl font-bold",
    [TextElement.H2]: "text-3xl font-semibold",
    [TextElement.H3]: "text-2xl font-semibold",
    [TextElement.H4]: "text-xl font-medium",
    [TextElement.H5]: "text-lg font-medium",
    [TextElement.H6]: "text-base font-medium",
    [TextElement.P]: "text-base",
    [TextElement.SPAN]: "text-sm",
  };

  return (
    <Tag className={classNames(typographyStyles[Tag], className)}>
      {children}
    </Tag>
  );
};
