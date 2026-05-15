import React from "react";

export function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (
    React.isValidElement<{ children?: React.ReactNode }>(node) &&
    node.props?.children
  ) {
    return extractText(node.props.children);
  }
  return "";
}
