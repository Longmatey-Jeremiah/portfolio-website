import React, { useRef } from "react";
import { CopyButton } from "./CopyButton";
import { extractText } from "./extract-text";

const Pre: React.FC<React.HTMLAttributes<HTMLPreElement>> = (props) => {
  const ref = useRef<HTMLPreElement | null>(null);
  const text = extractText(props.children);
  return (
    <div className="group relative my-6">
      <pre ref={ref} {...props} />
      <CopyButton text={text} />
    </div>
  );
};

export const mdxComponents = {
  pre: Pre,
};
