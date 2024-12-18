import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Button Component
const Button = ({ children, variant = "default", size = "medium", onClick, className, ...props }) => {
  const baseStyles = "flex items-center justify-center font-medium rounded focus:outline-none transition";

  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

// Define PropTypes
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["default", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large", "icon"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
