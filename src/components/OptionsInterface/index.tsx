import { useState } from "react";
import { LanguageSelector } from "../LanguageSelector";
import { ThemeSelector } from "../ThemeSelector";

export const OptionsInterface = () => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const translateMobile = displayOptions ? 'translate-x-0' : 'translate-x-[200%]';
    const translateDesktop = displayOptions ? 'md:translate-y-0 md:translate-x-0' : 'md:-translate-y-[200%] md:translate-x-0';

    return (
        <div
            className="fixed flex flex-col-reverse items-end justify-center w-full gap-2 top-2 right-2 md:top-4 md:right-4 md:flex-row md:justify-end md:items-center md:gap-4">
            <div className={`flex flex-col items-end gap-2 transform transition-transform duration-300 ${translateMobile} ${translateDesktop} md:flex-row md:gap-4`}>
                <ThemeSelector />
                <LanguageSelector />
            </div>
            <div 
                className={`hover:opacity-100 ${displayOptions ? 'opacity-100' : 'opacity-20'} group flex justify-center items-center px-4 rounded-[4px] h-8 bg-backgroundReverse text-textReverse cursor-pointer text-xl`}
                onClick={() => setDisplayOptions(!displayOptions)}>
                <span className={`${displayOptions ? 'rotate-[-45deg]' : 'rotate-0'} transition-transform duration-50 group-hover:opacity-75 select-none`}>
                    +
                </span>
            </div>
        </div>
    );
}
