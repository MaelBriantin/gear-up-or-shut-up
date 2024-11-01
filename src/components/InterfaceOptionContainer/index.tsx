

type InterfaceOptionContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const InterfaceOptionContainer = (props: InterfaceOptionContainerProps) => {
    const { children, className } = props;
    return (
        <div
            className={`
                bg-zinc-800 text-white dark:bg-white dark:text-black
                flex justify-between items-center 
                px-4 rounded-[4px] h-8 text-sm gap-4
                select-none
                w-fit ${className}
            `}
        >
            {children}
        </div>
    );
}