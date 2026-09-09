import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  newTab?: boolean;
  className?: string;
  /** Announced to screen readers in place of `text` when the link needs context. */
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  newTab = false,
  className = "",
  label,
}) => (
  <Link
    href={href}
    className={`chip ${className}`}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    aria-label={label ?? (newTab ? `${text} (opens in a new tab)` : undefined)}
  >
    {text}
  </Link>
);

export default Button;
