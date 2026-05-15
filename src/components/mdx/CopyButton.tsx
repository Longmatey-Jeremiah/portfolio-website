import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-0 transition-all hover:text-foreground group-hover:opacity-100 ${className}`}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-foreground" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
};
