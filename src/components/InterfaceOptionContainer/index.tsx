

type InterfaceOptionContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const InterfaceOptionContainer = (props: InterfaceOptionContainerProps) => {
    const { children, className } = props;
    return (
        <div
            className={`
                bg-backgroundReverse text-textReverse
                flex justify-between items-center 
                px-4 py-2 rounded-[4px] text-sm gap-4
                w-fit ${className}
            `}
        >
            {children}
        </div>
    );
}