import logoImg from "@/assets/images/newlogo.webp";
import logoDark from "@/assets/images/68d58496c83d6c462e129093_logo-dark.svg";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className = "h-8 w-auto", variant = "light" }: LogoProps) => {
  return (
    <img
      src={variant === "light" ? logoImg : logoDark}
      alt="Maitry Holidays"
      width={400}
      height={200}
      {...({ fetchPriority: "high" } as any)}
      decoding="sync"
      className={className}
    />
  );
};

export default Logo;
