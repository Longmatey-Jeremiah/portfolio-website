import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  withRule?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = "",
  withRule = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {withRule && <span className="section-label-line" />}
      <span className="text-mono-eyebrow text-muted-foreground">
        {children}
      </span>
    </div>
  );
};
