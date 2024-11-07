import Link from "next/link";

const Button = ({ text, href, newTab = false }) => (
  <Link href={href} legacyBehavior={newTab}>
    <a
      className="px-6 py-2 bg-transparent border border-white hover:border-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 hover:shadow-lg transition duration-400"
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  </Link>
);

export default Button;
