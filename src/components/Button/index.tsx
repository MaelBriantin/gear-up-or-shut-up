type ButtonPropsType = {
    children: string | React.ReactNode | undefined;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const Button = (props: ButtonPropsType) => {
    const { children, onClick, disabled, loading, type, className } = props;

    return (
        <button
            type={type || 'button'}
            onClick={disabled || loading ? undefined : onClick}
            className={`
                overflow-hidden whitespace-nowrap text-ellipsis
                ${disabled || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                ${loading ? 'cursor-wait min-w-20' : ''}
                ${!loading && !disabled ? 'hover:opacity-75' : ''}
                flex justify-center items-center
                text-sm px-4 rounded-[4px] h-8
                bg-zinc-800 text-white dark:bg-white dark:text-black
                ${className}
            `}
            >
            <span className="truncate select-none">
                {children}
            </span>
        </button>
    );
}