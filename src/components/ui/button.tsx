import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = "solid", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantStyles =
    variant === "outline"
      ? "border border-tea-DEFAULT bg-transparent text-tea-DEFAULT hover:bg-tea-DEFAULT hover:text-white"
      : "bg-tea-DEFAULT text-white hover:bg-tea-dark";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
