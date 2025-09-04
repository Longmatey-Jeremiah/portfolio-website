import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  iconColor = "text-primary",
  ...props
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center",
        "group relative bg-gradient-to-br from-black/1 via-black/2 to-black/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 dark:from-gray-700/10 dark:via-gray-700/15 dark:to-gray-700/30 dark:border-zinc-700/50 dark:hover:border-cyan-600/50 dark:hover:shadow-cyan-900/20",
        className
      )}
      {...props}
    >
      <Icon className={cn("h-10 w-10 mb-4", iconColor)} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-3">{description}</p>
    </div>
  );
};

export { FeatureCard };
