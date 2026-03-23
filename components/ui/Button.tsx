import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiSparkles } from "react-icons/hi2";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type IconType = "arrow" | "sparkles" | "none";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, string> = {
  sm: "py-1 px-2 text-[10px]",
  md: "py-2.5 px-4.5 text-[14px]",
  lg: "py-4 px-8 text-[16px]",
};

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-[#103FD5] text-white border-2 border-[#103FD5] hover:bg-[#0c2fa3] hover:border-[#0c2fa3] active:scale-[0.97]",
  outline:
    "bg-transparent text-[#fdb62f] border-2 border-[#fdb62f] hover:bg-[#fdb62f]/10 active:scale-[0.97]",
  ghost:
    "bg-transparent text-[#103FD5] border-2 border-transparent hover:border-[#103FD5]/20 hover:bg-[#103FD5]/5 active:scale-[0.97]",
};

const IconMap: Record<IconType, React.ReactNode> = {
  arrow: <GoArrowUpRight size={17} />,
  sparkles: <HiSparkles size={15} />,
  none: null,
};

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = "primary",
  size = "md",
  icon = "none",
  iconPosition = "right",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-1.5
    rounded-[40px]
    font-bold leading-4 tracking-tight
    transition-all duration-200 ease-in-out
    cursor-pointer select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#103FD5]/50
    disabled:opacity-50 disabled:pointer-events-none
    ${sizeMap[size]}
    ${variantMap[variant]}
    ${fullWidth ? "w-full" : "w-fit"}
    ${className}
  `;

  const content = (
    <>
      {icon !== "none" && iconPosition === "left" && (
        <span className="flex items-center">{IconMap[icon]}</span>
      )}
      <span>{label}</span>
      {icon !== "none" && iconPosition === "right" && (
        <span className="flex items-center">{IconMap[icon]}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

export default Button;