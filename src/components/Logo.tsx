import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export default function Logo({ tone = "dark", className = "" }: LogoProps) {
  if (tone === "light") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="TechLogicQ home">
        <Image
          src="/logo-footer.svg"
          alt="TechLogicQ"
          width={600}
          height={102}
          className="h-8 w-auto sm:h-9"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="TechLogicQ home">
      <Image
        src="/logo-header.svg"
        alt="TechLogicQ"
        width={600}
        height={102}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
