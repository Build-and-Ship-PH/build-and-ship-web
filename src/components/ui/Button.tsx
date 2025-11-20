import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105";

    const variants = {
        primary: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40",
        secondary: "bg-teal-500/10 border border-teal-300/30 text-teal-100 hover:bg-teal-500/20 hover:border-teal-300/50 backdrop-blur-sm",
        outline: "border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white",
        ghost: "text-teal-300 hover:text-teal-100 hover:bg-teal-500/10"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
