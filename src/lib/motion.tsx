import { m, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Standard fade-up reveal used across the site (matches Webflow scroll-in). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const stagger = (delay = 0.08, initial = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: initial } },
});

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/** Quick wrapper: fades + slides children up when scrolled into view. */
export const Reveal = ({ children, delay = 0, y = 28, className, once = true, ...rest }: RevealProps) => (
  <m.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.2 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    {...rest}
  >
    {children}
  </m.div>
);

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}

/** Stagger children with the same fadeUp variant. Children must be motion.* or use the variants prop. */
export const RevealGroup = ({ children, className, delay = 0.05, step = 0.08 }: RevealGroupProps) => (
  <m.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    variants={stagger(step, delay)}
    className={className}
  >
    {children}
  </m.div>
);

export { m as motion };
