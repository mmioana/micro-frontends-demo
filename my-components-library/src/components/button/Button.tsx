import { MouseEventHandler, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    className?: string,
    onClick: MouseEventHandler<HTMLButtonElement> | (() => void) | undefined
}

export const Button = ({ label, className, onClick, ...props }: ButtonProps) => {

    const classes = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${className}`;

    return (
        <button
            {...props}
            onClick={onClick}
            className={classes}
        >
            {label}
        </button>
    )
};