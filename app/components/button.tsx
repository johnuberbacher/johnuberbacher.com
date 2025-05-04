import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  newTab?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, newTab = false, className }) => (
  <Link href={href} legacyBehavior>
    <a
      className={`px-5 py-2 bg-transparent border border-white hover:border-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 hover:shadow-lg transition duration-400 ${className}`}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  </Link>
);

export default Button;
