"use client";

import { useRouter } from "next/navigation";
import Chevronright from "./icon/Chevronright";

const Button = ({
    text = 'Button',
    variant = 'primary',
    showChevron = false,
    onClick,
    href = '#'
}:{
     text?: string | undefined;
    variant?: string | undefined;
    showChevron?: boolean | undefined;
    onClick?: any;
    href?: string | undefined;
}) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            router.push(href);
        }
    };

    const buttonClass = variant === 'secondary' ? 'secondary-button' : 'primary-button';

    return (
        <button className={buttonClass} onClick={handleClick}>
            {text} {showChevron && <Chevronright />}
        </button>
    );
};

export default Button;
