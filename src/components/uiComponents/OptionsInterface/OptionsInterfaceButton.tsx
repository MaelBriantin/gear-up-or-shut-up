interface OptionsInterfaceButtonProps {
    displayOptions: boolean;
    setDisplayOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OptionsInterfaceButton = (props: OptionsInterfaceButtonProps) => {
    const { displayOptions, setDisplayOptions } = props;
    return (
        <div
            className={`hover:opacity-100 ${displayOptions ? 'opacity-100' : 'opacity-20'} group flex justify-center items-center px-4 rounded-[4px] h-10 bg-zinc-800 text-white dark:bg-white dark:text-black cursor-pointer text-2xl`}
            onClick={() => setDisplayOptions(!displayOptions)}>
            <span className={`${displayOptions ? 'rotate-[-45deg]' : 'rotate-0'} transition-transform duration-50 group-hover:opacity-75 select-none`}>
                +
            </span>
        </div>
    )
}